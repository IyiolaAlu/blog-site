import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbarr from "../../components/Navbar/Navbarr";
import Footer from "../../components/Footer/Footer";
import "./SinglePost.css";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`https://blog-siteb.onrender.com/api/posts/${id}`);
        setPost(res.data.post);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const submitComment = async () => {
    if (!comment.trim()) return;

    try {
      const res = await axios.post(
        `https://blog-siteb.onrender.com/api/posts/${id}/comment`,
        { comment: comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPost(res.data);
      setComment("");
    } catch (error) {
      console.error(error);
      alert("Failed to comment");
    }
  };

  if (loading) return (
    <div className="single-post container">
      <div className="loading-single-post">
        <div className="loading-spinner"></div>
        <h2>Loading post...</h2>
        <p>Fetching the article content</p>
      </div>
    </div>
  );

  if (!post) return (
    <div className="single-post container">
      <div className="post-not-found">
        <h2>Post not found</h2>
        <p>The article you're looking for doesn't exist or has been removed.</p>
      </div>
    </div>
  );

  return (
    <>
    <Navbarr/>
    <div className="single-post container">
      {post.image && <img src={post.image} alt={post.title} className="post-banner" />}

      <h1 className="post-title">{post.title}</h1>

      <p className="post-meta">
        By {post.author?.firstName} {post.author?.lastName} •{" "}
        {new Date(post.createdAt).toDateString()}
      </p>

      <div className="post-body">{post.content}</div>

      {/* COMMENTS */}
      <div className="comments-section">
        <h3>Comments ({post.comments.length})</h3>

        {post.comments.map((c) => (
          <div className="comment" key={c._id}>
            <img src={c.user?.profilePicture} alt="avatar" className="comment-avatar" />
            <div>
              <strong>
                {c.user?.firstName} {c.user?.lastName}
              </strong>
              <p>{c.comment}</p>
            </div>
          </div>
        ))}

        {user && (
          <div className="add-comment">
            <textarea
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={submitComment}>Post Comment</button>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SinglePost;