// import React from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import axios from "axios";
// import { useState } from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import { updateName } from "../../redux/appSlice.js";
// import { useDispatch } from "react-redux";

// export const Login = () => {
//   let dispatch = useDispatch()
//   const [loading, setloading] = useState(false);
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },

//     onSubmit: async (values) => {
//       // alert("loading...")
//         try {
//           console.log(values);
//         setloading(true)
//         let response = await axios.post('http://localhost:5006/api/v1/login', values, {
//           headers:{
//             "Authorization":"Bearer token"
//           }
//         })
//         console.log(response.data)
//         if(response.data.status){
//           // alert(response.data.message)
//           console.log(response.data)
//           localStorage.setItem('token', response.data.token)

//           let user = response.data.user
//           dispatch(updateName(user.fullname))
//           localStorage.setItem('user', JSON.stringify(user))

//           navigate('/homepage')
//         }else{
//           alert(response.data.message)
//         }
//         setloading(false)
//         } catch (error) {
//           console.log(error);

//           setloading(false)
//         }
//     },

//     validationSchema: yup.object({
//       email: yup
//         .string("")
//         .email("invalid email format")
//         .required("Email is required"),
//       password: yup
//         .string("")
//         .required("Password is required")
//         .min(8, "password must be at least 8 characters")
//         .matches(
//           /[A-Z]+/,
//           "Password must contain at least one uppercase letter"
//         )
//         .matches(/\d+/, "Password must contain at least one number")
//         .matches(
//           /[@$!%*#?&]+/,
//           "Password must contain at least one special character"
//         ),
//     }),
//   });

//   return (
//     <div className="signup-page">
//       <div className="signup-overlay">
//         <div className="signup-container">
//           <div className="signup-form-wrapper">
//             <div className="form-header">
//               <h1 className="form-title">Join DevJourney</h1>
//               <p className="form-subtitle">
//                 Create your account to follow my coding journey
//               </p>
//             </div>

//             <form className="signup-form" onSubmit={formik.handleSubmit}>

//               <div className="form-group">
//                 <label htmlFor="email" className="form-label">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   placeholder="Enter your email address"
//                   className="form-input"
//                 />
//                 {formik.touched.email && formik.errors.email && (
//                   <small className="error-message">{formik.errors.email}</small>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   placeholder="Create a secure password"
//                   className="form-input"
//                 />
//                 {formik.touched.password && formik.errors.password && (
//                   <small className="error-message">
//                     {formik.errors.password}
//                   </small>
//                 )}
//               </div>

//               <button type="submit" className="signup-btn" disabled={loading}>
//                 {loading ? "Logging" : "Log In"}
//               </button>
//             </form>

//             <div className="signin-link">
//               Don't have an account?{" "}
//               <a href="/signUp" className="link">
//                 Sign Up
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { updateName } from "../../redux/appSlice.js";
import { useDispatch } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        setloading(true);
        setLoginError("");

        const response = await axios.post(
          "http://localhost:5006/api/v1/login",
          values
        );

        if (response.data.status) {
          const { token, user } = response.data;

          // ✅ SAVE TOKEN + USER
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          // ✅ UPDATE REDUX (for navbar, etc.)
          dispatch(updateName(user.fullname));

          // ✅ GO TO HOME / PROFILE
          navigate("/homepage");
        } else {
          setLoginError("Incorrect email or password");
        }

        setloading(false);
      } catch (error) {
        console.log(error);
        setLoginError("Incorrect email or password");
        setloading(false);
      }
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .email("invalid email format")
        .required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
  });

  return (
    <div className="signup-page">
      <div className="signup-overlay">
        <div className="signup-container">
          <div className="signup-form-wrapper">
            <div className="form-header">
              <h1 className="form-title">Join DevJourney</h1>
              <p className="form-subtitle">
                Create your account to follow my coding journey
              </p>
            </div>

            <form className="signup-form" onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-input"
                />
                {formik.touched.email && formik.errors.email && (
                  <small className="error-message">{formik.errors.email}</small>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-input"
                />
                {formik.touched.password && formik.errors.password && (
                  <small className="error-message">
                    {formik.errors.password}
                  </small>
                )}
              </div>
              {loginError && (
                <small className="error-message">{loginError}</small>
              )}

              <button type="submit" className="signup-btn" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            <div className="signin-link">
              Don't have an account?{" "}
              <a href="/signUp" className="link">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
