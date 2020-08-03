import React, { Component } from 'react';
import PostForm from './PostForm';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts.map((post) => {
      return (
        <div key={post.id} className="card" id="card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });

    return (
      <div>
        <h1 className="center green-text">Fetching Posts from an API </h1>
        <br />
        {postItems}
        <PostForm />
      </div>
    );
  }
}

export default Posts;
