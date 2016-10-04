import React from 'react';

export default class SearchLayout extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="search-results">
          {this.props.children}
        </div>
      </div>
    );
  }
};
