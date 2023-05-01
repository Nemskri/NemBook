import React from 'react'
import './posts.scss'
import Post from '../post/Post';
import { useGlobalContext } from '../../Context';

function Posts() {

  const { posts, mode } = useGlobalContext();

  return (
    <div className="posts" style={mode ? { backgroundColor: "#03001C", color: "white" } : { backgroundColor: "#d6d6d6" }}>
      {posts.map((p) => (
        <Post p={p} key={p.id} />
      ))}
    </div>
  )
}

export default Posts
