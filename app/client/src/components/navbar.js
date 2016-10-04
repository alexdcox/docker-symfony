import React from "react";
import AppBar from 'material-ui/AppBar'

import MainDrawer from "./main-drawer";

export default class Navbar extends React.Component {
  state = {
    open: false
  };

  render() {
    return (
      <div>
        <AppBar
          title="App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.setState({open: true})}
        />
        <MainDrawer open={this.state.open} onClose={() => this.setState({open: false})}/>
      </div>
    );
  }
}

