import React from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

export default class UserList extends React.Component {
  render() {
    return (
      <div>
        <List>
          <Subheader>Recent chats</Subheader>
          <ListItem
            primaryText="Brendan Lim"
            leftAvatar={<Avatar>A</Avatar>}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Eric Hoffman"
            leftAvatar={<Avatar>A</Avatar>}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Grace Ng"
            leftAvatar={<Avatar>A</Avatar>}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Kerem Suer"
            leftAvatar={<Avatar>A</Avatar>}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Raquel Parrado"
            leftAvatar={<Avatar>A</Avatar>}
            rightIcon={<CommunicationChatBubble />}
          />
        </List>
        <Divider />
        <List>
          <Subheader>Previous chats</Subheader>
          <ListItem
            primaryText="Chelsea Otakan"
            leftAvatar={<Avatar>A</Avatar>}
          />
          <ListItem
            primaryText="James Anderson"
            leftAvatar={<Avatar>A</Avatar>}
          />
        </List>
      </div>
    );
  }
};