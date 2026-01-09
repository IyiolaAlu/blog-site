import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post._id}`} className="post-card">
      {post.image && (
        <img src={post.image} alt={post.title} className="post-image" />
      )}

      <div className="post-content">
        <h3>{post.title}</h3>

        <p className="post-meta">
          By {post.author?.firstName} •{" "}
          {new Date(post.createdAt).toDateString()}
        </p>

        <p className="post-preview">
          {post.content.substring(0, 100)}...
        </p>

        <span className="read-more">Read more →</span>
      </div>
    </Link>
  );
};

export default PostCard;
