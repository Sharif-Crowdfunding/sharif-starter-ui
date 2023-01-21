import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import ForgotPassword from "../components/auth/ForgotPassword";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";

const Authenticate = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div style={{ padding: 20, position: "absolute", left: 0 }}>
          <IoArrowBack />
      </div>
      {params.section === "register" ? (
        <SignUp />
      ) : params.section === "login" ? (
        <SignIn />
      ) : (
        <ForgotPassword />
      )}
    </React.Fragment>
  );
};

export default Authenticate;
