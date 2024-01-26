import React from "react";
import "./NavList.css";
import styled from "styled-components";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SmsIcon from "@mui/icons-material/Sms";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from "react-router-dom";

function NavList() {
  const profileName = 'profile-2';
  return (
    <div className="navIcons">
      <NavIcons className="active">
        <img src="/images/nav-home.svg" alt="" />
        <span style={{ color: "black" }}>Home</span>
      </NavIcons>
      <NavIcons>
        <PeopleAltIcon />
        <span>My Network</span>
      </NavIcons>
      <NavIcons>
        <BusinessCenterIcon />
        <span>Jobs</span>
      </NavIcons>
      <NavIcons>
        <SmsIcon />
        <span>Messaging</span>
      </NavIcons>
      <NavIcons>
        <NotificationsIcon />
        <span>Notifications</span>
      </NavIcons>
      <NavIcons>
        <Link to={`/profile/${profileName}`}>
          <img className="user" src="/images/user.svg" alt="" />
          <span>Me</span>
        </Link>
      </NavIcons>
      <Line />
      <NavIcons>
        <AppsIcon />
        <span>Work</span>
      </NavIcons>

    </div>
  );
}

export default NavList;

const NavIcons = styled.span`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  margin-right: 12px;
  color: rgba(0, 0, 0, 0.6);


  & > span {
    font-size: 12px;
    margin-top: 2px;
  }

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Line = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
