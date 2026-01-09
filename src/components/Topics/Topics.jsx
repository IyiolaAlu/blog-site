import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard";
import "./Topics.css";

const Topics = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const topics = allPosts.slice(-3); 

  useEffect(() => {
  const fetchPosts = async () => {
    const res = await axios.get("https://blog-siteb.onrender.com/api/posts");
    setAllPosts(res.data);
  };
  fetchPosts();
}, []);

  return (
    <div className="container topic">
      <div className="d-flex flex-column justify-content-center">
        <section className="homepage-topics">
  <h2 className="text-center pt-5 pb-3">What I Write About</h2>

  <div className="posts-grid">
    {topics.map((post) => (
      <PostCard key={post._id} post={post} />
    ))}
  </div>
</section>

        <div className="cardM mt-4 mt-lg-5">
          {/* Card 1 */}
          <div className="card1 d-flex flex-column flex-lg-row align-items-center mt-4 mt-lg-5 p-3 p-lg-4 bg-light rounded-4 shadow-sm">
            <div className="image-container mb-4 mb-lg-0 me-lg-5">
              <img
                className="rounded-4 img-fluid shadow"
                src="/images/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg"
                alt="Coding journey experiences"
                loading="lazy"
              />
            </div>
            <div className="content-container text-center text-lg-start">
              <h2 className="mb-4">Why follow my journey</h2>
              <div className="benefits-list">
                <p className="d-flex align-items-start align-items-lg-center mb-3">
                  <i className="fa-solid fa-square-check text-success me-3 mt-1"></i>
                  <span className="text-start">Real beginner experiences - no filter</span>
                </p>
                <p className="d-flex align-items-start align-items-lg-center mb-3">
                  <i className="fa-solid fa-square-check text-success me-3 mt-1"></i>
                  <span className="text-start">Step-by-step project documentation</span>
                </p>
                <p className="d-flex align-items-start align-items-lg-center mb-3">
                  <i className="fa-solid fa-square-check text-success me-3 mt-1"></i>
                  <span className="text-start">Code snippets that actually work</span>
                </p>
                <p className="d-flex align-items-start align-items-lg-center mb-3">
                  <i className="fa-solid fa-square-check text-success me-3 mt-1"></i>
                  <span className="text-start">Honest struggles and solutions</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card2 d-flex flex-column flex-lg-row align-items-center mt-4 mt-lg-5 p-3 p-lg-4 bg-light rounded-4 shadow-sm">
            <div className="content-container text-center text-lg-start order-lg-1 order-2">
              <h2 className="mb-4">
                I document my coding journey
              </h2>
              <div className="benefits-list">
                <p className="d-flex align-items-start align-items-lg-center mb-3">
                  <i className="fa-solid fa-square-check text-success me-3 mt-1"></i>
                  <span className="text-start">Documenting both successes and failures</span>
                </p>
                <p className="d-flex align-items-start align-items-lg-center mb-3">
                  <i className="fa-solid fa-square-check text-success me-3 mt-1"></i>
                  <span className="text-start">Step-by-step project documentation</span>
                </p>
                <p className="d-flex align-items-start align-items-lg-center mb-3">
                  <i className="fa-solid fa-square-check text-success me-3 mt-1"></i>
                  <span className="text-start">Providing working examples for beginners</span>
                </p>
                <p className="d-flex align-items-start align-items-lg-center mb-3">
                  <i className="fa-solid fa-square-check text-success me-3 mt-1"></i>
                  <span className="text-start">Honest reflections on learning challenges</span>
                </p>
              </div>
            </div>
            <div className="image-container mb-4 mb-lg-0 ms-lg-5 order-lg-2 order-1">
              <img
                className="rounded-4 img-fluid shadow"
                src="/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"
                alt="Documenting coding journey"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;