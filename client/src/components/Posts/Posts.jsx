import React from 'react';
import { useSelector } from 'react-redux';

// style
import useStyles from './styles';

// Component
import Post from './Post/Post';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  
  console.log('posts', posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  )
}

export default Posts;