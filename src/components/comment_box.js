import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  handleChange(event) {
    this.setState(
      { comment: event.target.value }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      { comment: '' }
    );
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className='comment-box'>
        <h2>Add a Comment</h2>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}>
          </textarea>
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}
