import React from "react";
// import NavIcons from './NavIcons'
import "./NavList.css";
import styled from "styled-components";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SmsIcon from "@mui/icons-material/Sms";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from '@mui/icons-material/Apps';
import { style } from "@mui/system";

function NavList() {
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
          <img className="user" src="/images/user.svg" alt="" />
          <span>Me</span>
      </NavIcons>
      <Line/>
      <NavIcons>
          <AppsIcon/>
          <span>Work</span>
      </NavIcons>

    </div>
  );
}

export default NavList;

const NavIcons = styled.span`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: 6px 10px;
  margin-right: 2px;
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
  border-left: 1px solid rgba(0, 0, 0, 0.4);
`;
