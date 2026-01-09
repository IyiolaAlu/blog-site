import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signup } from "./pages/SignUp/SignUp";
import { Login } from "./pages/LoginPage/Login";
import Homepage from "./pages/HomepageU/Homepage";
import Profile from "./pages/ProfileU/Profile";
import AuthGuard from "./auth/AuthGuard";
import Landing from "./pages/Landingpage/Landing";
import EditProfile from "./pages/ProfileU/EditProfile";
import AdminGuard from "./auth/AdminGuard";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Posts from "./pages/Posts/Posts";
import SinglePost from "./pages/Posts/SinglePost";
import AdminDashboard from "./pages/Admin/AdminDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/SignUp" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />

      {/* PUBLIC POSTS */}
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<SinglePost />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


      {/* PROTECTED ROUTES */}
      <Route element={<AuthGuard />}>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />

      </Route>

      {/* ADMIN (AUTH + ADMIN ONLY) */}
      <Route element={<AdminGuard />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
