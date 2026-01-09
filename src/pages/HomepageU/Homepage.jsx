import React from "react";
import Topics from "../../components/Topics/Topics";
import BlogGrid from "../../components/BlogGrid/BlogGrid";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <Topics />
      <BlogGrid />
      <Footer />
    </>
  );
};

export default Homepage;
