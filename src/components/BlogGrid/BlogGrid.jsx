import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard";

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5006/api/posts");
      setPosts(res.data.slice(0, 3)); 
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">

      <section className="home-posts">
        <h2 className="text-center pt-5 pb-3">Latest Articles</h2>

        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogGrid;
