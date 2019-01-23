import React, { Component } from 'react';
import PostCard from './PostCard';

class PostList extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(p => (
          <PostCard
            id={p.id}
            title={p.title}
            description={p.description}
            body={p.body}
            key={p.id}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
