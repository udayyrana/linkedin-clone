import React, { useEffect } from "react";
import Feed from "./General/Feed";
import NavList from "./NavComponents/NavList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const user = useSelector((store) => store.user.loggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    user === false && navigate("/");
    //eslint-disable-next-line
  }, []);

  return (
    user === true && (
      <>
        <NavList />
        <Feed />
      </>
    )
  );
}

export default Home;
