import React from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    alert('need ssr!');
  };

  render() {
    return <h1 onClick={this.handleClick}>click</h1>
  }
}