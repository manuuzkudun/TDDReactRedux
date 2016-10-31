import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='comment-box'>
        <h2>Add a Comment</h2>
        <textarea></textarea>
        <button>Submit Comment</button>
      </div>
    );
  }
}
