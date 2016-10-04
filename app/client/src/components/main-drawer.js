import React from "react";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Link from "react-router/lib/Link";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import IconButton from "material-ui/IconButton";
import RouterContext from 'react-router/lib/RouterContext';

export default class MainDrawer extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  toContacts = () => {
    console.log('@test');
    this.context.router.push('/contacts');
  };

  toChat = () => {
    console.log('@test');
    this.context.router.push('/chat');
  };

  render() {
    return (
      <Drawer open={this.props.open}>
        <AppBar
          title="Drawer"
          iconElementLeft={<IconButton onClick={this.props.onClose}><NavigationClose/></IconButton>}
        />
        <List>
          <ListItem primaryText="Contacts" onTouchTap={this.toContacts}/>
          <ListItem primaryText="Chat" onTouchTap={this.toChat}></ListItem>
          <ListItem
            primaryText="WithNesting"
            nestedItems={[
              <ListItem key={1} primaryText="First"/>
            ]}/>
        </List>
      </Drawer>
    );
  }
}
