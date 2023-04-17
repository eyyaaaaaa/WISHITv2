import "./posts.scss"
import Post from "../post/Post"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Posts({userId}) {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = userId ? 
      await axios.get("/api/posts/profile/"+ userId) 
      : await axios.get("/api/posts/641f10a7464e22996d0e55db");
      setPosts(res.data)
    }
    fetchPosts();
  },[userId] );
  return (
    
    <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post._id}/>
    ))}
  </div>
  )
}
