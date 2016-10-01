import React from "react";
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import List from 'material-ui/List'
import ListItem from 'material-ui/List/ListItem'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

export default class MainDrawer extends React.Component {
  render() {
    return (
      <Drawer open={this.props.open}>
        <AppBar
          title="Drawer"
          iconElementLeft={<IconButton onClick={this.props.onClose}><NavigationClose/></IconButton>}
        />
        <List>
          <ListItem primaryText="Hello"/>
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
