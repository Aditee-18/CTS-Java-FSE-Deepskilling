import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        this.setState({ hasError: true });
      });
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <div>Error loading posts.</div>;
    }

    return (
      <div>
        <h2>Posts List</h2>
        {posts.map((post) => (
          <div key={post.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
