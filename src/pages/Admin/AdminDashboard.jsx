import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AdminDashboard.module.css"; // Updated import
import Navbarr from "../../components/Navbar/Navbarr";

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", content: "", image: "" });
  const [editingPost, setEditingPost] = useState(null);
  const token = localStorage.getItem("token");

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5006/api/posts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(res.data.posts || res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreate = async () => {
    try {
      const res = await axios.post("http://localhost:5006/api/posts", newPost, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts([res.data.post, ...posts]);
      setNewPost({ title: "", content: "", image: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to create post");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await axios.delete(`http://localhost:5006/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(posts.filter((p) => p._id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete post");
    }
  };

  const startEdit = (post) => {
    setEditingPost(post);
  };

  const cancelEdit = () => {
    setEditingPost(null);
  };

  const submitEdit = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5006/api/posts/${editingPost._id}`,
        editingPost,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPosts(posts.map((p) => (p._id === editingPost._id ? res.data.post : p)));
      setEditingPost(null);
    } catch (error) {
      console.error(error);
      alert("Failed to update post");
    }
  };

  if (loading) return (
    <div className={styles["loading-container"]}>
      <div className={styles["loading-spinner"]}></div>
      <h2>Loading Dashboard...</h2>
    </div>
  );

  return (
    <>
    <Navbarr/>
    <div className={styles["admin-dashboard"]}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles["sidebar-header"]}>
          <h1>Admin</h1>
          <p className={styles.subtitle}>Manage your content</p>
        </div>
        <div className={styles["user-info"]}>
          <div className={styles["user-avatar"]}>A</div>
          <div>
            <h3>Alu Iyiola</h3>
            <p className={styles["user-email"]}>aluiyiola50@gmail.com</p>
          </div>
        </div>
        <div className={styles["sidebar-stats"]}>
          <div className={styles["stat-card"]}>
            <span className={styles["stat-number"]}>{posts.length}</span>
            <span className={styles["stat-label"]}>Total Posts</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles["main-content"]}>
        {/* Header */}
        <header className={styles["dashboard-header"]}>
          <h2>Admin Dashboard</h2>
          <button className={styles["refresh-btn"]} onClick={fetchPosts}>
            ↻ Refresh Posts
          </button>
        </header>

        <div className={styles["dashboard-content"]}>
          {/* Left Column - Create/Edit Form */}
          <div className={styles["form-column"]}>
            <div className={styles["form-card"]}>
              <div className={styles["form-header"]}>
                <h3>{editingPost ? "✏️ Edit Post" : "📄 Create New Post"}</h3>
                {editingPost && (
                  <button className={styles["cancel-btn"]} onClick={cancelEdit}>
                    Cancel Edit
                  </button>
                )}
              </div>
              
              <div className={styles["form-group"]}>
                <label>Title</label>
                <input
                  className={styles["form-input"]}
                  placeholder="Enter post title"
                  value={editingPost ? editingPost.title : newPost.title}
                  onChange={(e) => editingPost 
                    ? setEditingPost({ ...editingPost, title: e.target.value })
                    : setNewPost({ ...newPost, title: e.target.value })
                  }
                />
              </div>

              <div className={styles["form-group"]}>
                <label>Content</label>
                <textarea
                  className={styles["form-textarea"]}
                  placeholder="Write your post content here..."
                  rows="5"
                  value={editingPost ? editingPost.content : newPost.content}
                  onChange={(e) => editingPost 
                    ? setEditingPost({ ...editingPost, content: e.target.value })
                    : setNewPost({ ...newPost, content: e.target.value })
                  }
                />
              </div>

              <div className={styles["form-group"]}>
                <label>Image URL (Optional)</label>
                <input
                  className={styles["form-input"]}
                  placeholder="https://example.com/image.jpg"
                  value={editingPost ? editingPost.image : newPost.image}
                  onChange={(e) => editingPost 
                    ? setEditingPost({ ...editingPost, image: e.target.value })
                    : setNewPost({ ...newPost, image: e.target.value })
                  }
                />
              </div>

              <button 
                className={`${styles["submit-btn"]} ${editingPost ? styles.edit : styles.create}`}
                onClick={editingPost ? submitEdit : handleCreate}
              >
                {editingPost ? "Update Post" : "Create Post"}
              </button>
            </div>
          </div>

          {/* Right Column - Posts List */}
          <div className={styles["posts-column"]}>
            <div className={styles["posts-header"]}>
              <h3>📚 All Posts ({posts.length})</h3>
              <span className={styles["posts-count"]}>{posts.length} posts</span>
            </div>

            {posts.length === 0 ? (
              <div className={styles["empty-state"]}>
                <div className={styles["empty-icon"]}>📝</div>
                <h4>No posts yet</h4>
                <p>Create your first post to get started!</p>
              </div>
            ) : (
              <div className={styles["posts-grid"]}>
                {posts.map((post) => (
                  <div key={post._id} className={styles["post-card"]}>
                    <div className={styles["post-card-header"]}>
                      <h4>{post.title || "Untitled Post"}</h4>
                      <div className={styles["post-actions"]}>
                        <button 
                          className={`${styles["action-btn"]} ${styles["edit-btn"]}`}
                          onClick={() => startEdit(post)}
                        >
                          ✏️ Edit
                        </button>
                        <button 
                          className={`${styles["action-btn"]} ${styles["delete-btn"]}`}
                          onClick={() => handleDelete(post._id)}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                    
                    <div className={styles["post-content-preview"]}>
                      <p>{post.content?.substring(0, 120) || "No content"}...</p>
                    </div>
                    
                    {post.image && (
                      <div className={styles["post-image-preview"]}>
                        <img src={post.image} alt="Post preview" />
                      </div>
                    )}
                    
                    <div className={styles["post-meta"]}>
                      <span className={styles["post-date"]}>
                        📅 {new Date(post.createdAt || Date.now()).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default AdminDashboard;