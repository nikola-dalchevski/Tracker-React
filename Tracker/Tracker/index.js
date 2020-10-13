//setup server
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const switchType = require("./main");
const { google } = require("googleapis");
const keys = require("./keys.json");

//SETUP DATABASE
const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

client.authorize(function (err, tokens) {
  if (err) {
    console.log("AUTH", err);
    return;
  } else {
    console.log("Connencted");
  }
});

const gsapi = google.sheets({ version: "v4", auth: client });

//--------------------------------------------------------------------------------------------------

const app = express();
app.use(cors());
const port = 4001;

app.use(bodyParser.json());

app.post("/update", async (req, res) => {
  var req = req.body;
  var result = await switchType(gsapi, req.Sheet, req.Row, req.Values)[
    "update"
  ]();
  res.send(result);
});

app.get("/", async (req, res) => {
  let param = req.query;
  console.log(req.query);
  let result = await switchType(gsapi, param.sheet)["get"]();
  console.log("res", result);
  res.send(result);
});

app.post("/append", async (req, res) => {
  var req = req.body;
  var response = await switchType(gsapi, req.Sheet, req.Row, req.Values)[
    "append"
  ]();
  res.send(response);
});

app.post("/clear", async (req, res) => {
  var req = req.body;
  var response = await switchType(gsapi, req.Sheet, req.Row, req.Values)[
    "clear"
  ]();
  res.send(response);
});

app.listen(port, () => console.log(`hello from port ${port}`));

//Api usage:

//get all data from sheet
//GET sand request to http://localhost:4001 with one query parameter name of the sheet you take data ?sheet=Users

//append new row to the end of sheet table
//APPEND send POST request to http://localhost:4001/append with body object with these parameters:
//1 Sheet: name of the sheet
//2 Row: row always need to be 1
//3.Values: in format of [[],[]....]

//update values on specific row
//UPDATE send POST request to  http://localhost:4001/update with body object with these parameters:
//1 Sheet: name of the sheet
//2 Row: number of row that needs to be updated
//3.Values: in format of [[],[]....]

//delete specific row
//CLEAR send POST request to  http://localhost:4001/clear with body object with these parameters:
//1 Sheet: name of the sheet
//2 Row: number of row that needs to be deleted
