import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './navbar';

export default class MainLayout extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <header className="primary-header"></header>
          <Navbar/>
          {/*<aside className="primary-aside">*/}
            {/*<ul>*/}
              {/*<li><Link to="/" activeClassName="active">Home</Link></li>*/}
              {/*<li><Link to="/users" activeClassName="active">Users</Link></li>*/}
              {/*<li><Link to="widgets" activeClassName="active">Widgets</Link></li>*/}
            {/*</ul>*/}
          {/*</aside>*/}
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
};