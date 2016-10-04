// TODO: Re-implement or remove

import "./App.css";
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar from "./components/navbar";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="adc-app">
          <Navbar/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
