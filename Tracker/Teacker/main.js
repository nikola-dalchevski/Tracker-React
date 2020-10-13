function switchType(gsapi, nameOfSheet, row, values) {
  return {
    update: () => update(gsapi, nameOfSheet, row, values),
    clear: () => clear(gsapi, nameOfSheet, row, values),
    get: () => get(gsapi, nameOfSheet, row, values),
    append: () => append(gsapi, nameOfSheet, row, values)
  };
}

//--------------------------------------------------------

function makeOptions(type, nameOfSheet, row, values) {
  let spreadsheetId = "1Bc9yGsriWNznye21akrgmu_i7ZOKjzdtbBVMix70sSE";

  //set up col form clear action
  let col =
    nameOfSheet == "Workers"
      ? 3
      : nameOfSheet == "Clients"
      ? 5
      : nameOfSheet == "Projects"
      ? 6
      : nameOfSheet == "Tasks"
      ? 8
      : "";

  //map number col to anotation A!
  function colNumberToString() {
    return {
      3: "C",
      5: "E",
      6: "F",
      8: "H"
    };
  }
  console.log("makeOptions");
  let options = {
    spreadsheetId: spreadsheetId,
    range: `${nameOfSheet}${row ? "!A" + row : ""}${
      values == "clear" ? ":" + colNumberToString()[`${col}`] + row : ""
    }`
  };

  if (type == "Long") {
    options.valueInputOption = "USER_ENTERED";
    options.resource = { values: values };
  }

  console.log(options);
  return options;
}

//                       Repositories
//-------------------------------------------------------------------------------------
async function get(gsapi, nameOfSheet) {
  console.log("Inside get");
  let result = await gsapi.spreadsheets.values.get(
    makeOptions("Short", nameOfSheet)
  );
  console.log(result);
  let dataArray = result.data.values;
  return dataArray;
}

async function update(gsapi, nameOfSheet, row = 0, values) {
  let response = await gsapi.spreadsheets.values.update(
    makeOptions("Long", nameOfSheet, row, values)
  );
  return response ? "updated element" : "something go wrong";
}

async function append(gsapi, nameOfSheet, row = 1, values) {
  let response = await gsapi.spreadsheets.values.append(
    makeOptions("Long", nameOfSheet, row, values)
  );
  return response ? "added new element" : "something go wrong";
}

async function clear(gsapi, nameOfSheet, row = 0, values) {
  let result = await gsapi.spreadsheets.values.clear(
    makeOptions("Short", nameOfSheet, row, values)
  );

  // need to set up parameters
  let request = {
    spreadsheetId: "1Bc9yGsriWNznye21akrgmu_i7ZOKjzdtbBVMix70sSE", // TODO: Update placeholder

    resource: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId: 0,
              dimension: "ROWS",
              startIndex: 2,
              endIndex: 3
            }
          }
        }
      ]
    }
  };

  gsapi.spreadsheets.batchUpdate(request, function(err, response) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(JSON.stringify(response, null, 2));
  });
}

module.exports = switchType;
