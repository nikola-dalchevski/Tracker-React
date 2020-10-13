import React from "react";
import classes from "./app.module.css";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { Switch, Route } from "react-router-dom";
import {
  faList,
  faAlignLeft,
  faAlignJustify,
  faUserTie
} from "@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();
const options = {
  listLinks: ["clients", "projects", "tasks", "workers"],
  listIcons: [faList, faAlignLeft, faAlignJustify, faUserTie]
};

class App extends React.Component {
  state = {
    showSidebar: true,
    forceShowSidebar: false
  };
  componentDidMount() {
    // this.setState({ isMobile: window.innerWidth < 425 });
    window.addEventListener("resize", () => {
      this.setState({
        showSidebar: window.innerWidth > 1100,
        forceShowSidebar:
          window.innerWidth > 1100 ? false : this.state.forceShowSidebar
      });
    });
  }

  sidebarShowHandler = () => {
    this.setState({
      forceShowSidebar: !this.state.forceShowSidebar
    });
  };

  render() {
    console.log("render called");
    console.log(this.state);
    return (
      <Provider store={store}>
        <div className={classes.App}>
          {this.state.showSidebar || this.state.forceShowSidebar ? (
            <Sidebar options={options} />
          ) : (
            <Sidebar options={options} close="close" />
          )}

          <Switch>
            {options.listLinks.map(item => {
              return (
                <Route path={"/" + item} key={item}>
                  <Main
                    type={item}
                    sidebar={{
                      sidebar: this.state.showSidebar,
                      force: this.state.forceShowSidebar
                    }}
                    sidebarEvent={this.sidebarShowHandler}
                  />
                </Route>
              );
            })}
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
