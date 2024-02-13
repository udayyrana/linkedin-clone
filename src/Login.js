import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogIn } from "./compnents/utils/userSlice";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const loggedIn = useSelector((store) => store.user.loggedIn);
  const [loginWarning, setLoginWarning] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userDetails, setUserDetails] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    ////////////////////////
    //authentication
    ////////////////////////
    if (loginId === "uday" && loginPassword === "1234") {
      const details = {
        displayName: "Uday Singh Rana",
        photoURL:
          "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
        email: "udayrana@gmail.com",
        headline: "Developer",
        whoViewed: 55,
        totalConnections: 5555,
      };
      dispatch(userLogIn(details));
      navigate("/home");
    } else {
      setLoginWarning(true);
    }
  };
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      // setUserDetails(data.user.email);
      const user = auth.currentUser;
      console.log(user);
      const details = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        headline: "Viewer",
        whoViewed: 55,
        totalConnections: 5555,
      };
      dispatch(userLogIn(details));
      navigate("/home");
    });
  };

  return (
    <>
      <LoginContainer>
        <ImageSection>
          <img src="/images/screenshot.png" alt="" />
        </ImageSection>
        <LoginForm>
          <button onClick={handleClick}>SignIn with Google</button>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input">
              <label>Login ID</label>
              <input
                type="text"
                placeholder="Enter Login ID"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
              />
            </div>
            <div className="input">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <span>
                <a href="#" style={{ color: "rgba(0,0,0,0.6)" }}>
                  <VisibilityOffIcon />
                </a>
              </span>
            </div>
            <div className="remeberCheck">
              <span>
                <input type="checkbox" />
                <span>Remember Me</span>
              </span>
              <a href="#">Change Password</a>
            </div>
            <span>
              <input type="checkbox" />
              <p>
                Agree to{" "}
                <Link to="/termsandconditions">Terms & Conditions</Link>
              </p>
            </span>
            {loginWarning == true && (
              <LoginWarning>
                Please check your username and password!
              </LoginWarning>
            )}
            <LoginAndRegister>
              <button type="submit">Login</button>
              <p>
                Don't have an account? <Link to="/signup">Register Here</Link>{" "}
              </p>
            </LoginAndRegister>
          </form>
        </LoginForm>
      </LoginContainer>
    </>
  );
}

export default Login;

const LoginContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: inline;
  }
`;
const LoginWarning = styled.p`
  text-align: center;
  color: red;
  font-size: 14px;
  margin-bottom: 6px;
`;
const ImageSection = styled.div`
  width: 50%;
  margin-right: 1rem;
  & > img {
    height: 50rem;
    padding: 5rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const LoginForm = styled.div`
  height: fit-content;
  border-radius: 1rem;
  box-shadow: 0 5px 2.2rem 2px rgba(0, 0, 0, 0.2);
  padding: 10rem 6rem;
  color: rgba(0, 0, 0, 0.6);
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
    margin: 2rem auto;
    padding: 6rem 4rem;
  }
  @media (max-width: 468px) {
    width: 70%;
  }

  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    position: relative;
    & > input {
      padding: 1rem;
      margin-bottom: 1.5rem;
      border-radius: 0.6rem;
      border: 1px solid rgba(0, 0, 0, 0.6);
      font-family: "Raleway", sans-serif;
    }
    & > label {
      font-size: 1rem;
      margin-bottom: 1rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.9);
    }
    & > span {
      position: absolute;
      right: 0;
      padding-right: 1rem;
      margin-top: 3.4rem;
    }
  }

  a {
    color: #f89d44;
  }
  span,
  p,
  a {
    font-size: 1.2rem;
  }
  & > form {
    display: flex;
    flex-direction: column;
    & > h1 {
      font-size: 3.6rem;
      text-align: center;
      margin-bottom: 2rem;
      letter-spacing: -0.1rem;
      color: rgba(0, 0, 0, 0.9);
    }

    & > .remeberCheck {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      & > span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      & > a {
        text-decoration: none;
      }
    }
    & > span {
      margin-bottom: 2.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

const LoginAndRegister = styled.div`
  text-align: center;
  & > button {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 0.6rem;
    color: white;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    background-color: #1575a7;
    margin-bottom: 2rem;
    @media (max-width: 468px) {
      width: 100%;
    }
  }
  & > p {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    & > a {
      font-weight: 800;
    }
  }
`;
