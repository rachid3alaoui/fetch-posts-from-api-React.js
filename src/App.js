import React, { Component } from 'react';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
