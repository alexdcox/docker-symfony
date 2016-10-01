import React, {Component} from "react";
import AppBar from 'material-ui/AppBar'
import MainDrawer from "./MainDrawer";

class Navbar extends Component {
  state = {
    open: true
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

export default Navbar;
