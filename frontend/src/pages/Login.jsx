import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setUser, setLoginPageOpen } from "../redux/authSlice";
import { Button, FormInput, SignUpForm } from "../components";
import SignInForm from "../components/SignInForm";

const Login = () => {
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    title: "",
    username: "",
    password: "",
    file: null,
  });
  const { firstName, lastName, title, username, password, file } = userForm;
  const [showSignUp, setShowSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    const { username, password } = userForm;
    console.log("handleLogin");
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      dispatch(setUser(res.data.user));
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
      dispatch(setLoginPageOpen(false));
      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid username or password");
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("title", title);
      formData.append("file", file);

      const res = await axios.post(
        "http://localhost:5000/api/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(setUser(res.data.user));
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
      dispatch(setLoginPageOpen(false));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="h-screen max-w-xl w-full flex px-6 mx-auto bg-white">
      <div className="w-full">
        {showSignUp ? (
          <SignUpForm
            handleSignUp={handleSignUp}
            handleSignUpClick={handleSignUpClick}
            setUserForm={setUserForm}
            userForm={userForm}
          />
        ) : (
          <SignInForm
            errorMessage={errorMessage}
            handleLogin={handleLogin}
            handleSignUpClick={handleSignUpClick}
            setUserForm={setUserForm}
            userForm={userForm}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
