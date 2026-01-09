import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard";
import Navbarr from "../../components/Navbar/Navbarr";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://blog-siteb.onrender.com/api/posts");
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return (
    <div className="posts-page container">
      <div className="loading-posts">
        <div className="loading-spinner"></div>
        <h2>Loading posts...</h2>
        <p>Please wait while we fetch the latest articles</p>
      </div>
    </div>
  );

  return (
    <>
    <Navbarr/>
    <div className="posts-page container">
      
      <h1 className="posts-title">All Articles</h1>

      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Posts;