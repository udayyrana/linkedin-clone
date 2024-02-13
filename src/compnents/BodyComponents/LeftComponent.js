import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";
import styled from "styled-components";
import "./LeftComponent.css";
import { useSelector } from "react-redux";

function LeftComponent() {
  const user = useSelector((store) => store.user.data);
  const { name, headline, profilePic, whoViewed, totalConnections } = user;
  return (
    <>
      <div className="left">
        <Profile>
          <BackGround />
          <img src={profilePic} alt="" />
          <a>
            <h4>{name}</h4>
          </a>
          <p>{headline}</p>
        </Profile>
        <HorizontalLine />
        <ProfileStats style={{ marginTop: "10px" }}>
          <p>
            Who's viewed your <br />
            profile
          </p>
          <StatsViewNo>
            <a>{whoViewed}</a>
          </StatsViewNo>
        </ProfileStats>
        <ProfileStats style={{ marginBottom: "10px" }}>
          <p>
            Connections <br />
            <strong> Manage your network</strong>
          </p>
          <StatsViewNo>
            <a>{totalConnections}</a>
          </StatsViewNo>
        </ProfileStats>
        <HorizontalLine />
        <ProfileStats>
          <Subscribe>
            <p>Access exclusive tools & insights</p>
          </Subscribe>
        </ProfileStats>
        <HorizontalLine />
        <MyItems>
          <BookmarkIcon /> <p> My Items </p>
        </MyItems>
      </div>
    </>
  );
}

export default LeftComponent;

const Profile = styled.div`
  text-align: center;
  position: relative;
  & > img {
    border-radius: 50%;
    border: 2px solid white;
    width: 60px;
    margin: 20px;
    z-index: 10;
    position: relative;
  }
  & > a {
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
    color: rgba(0, 0, 0, 0.8);
    & > h4 {
      font-weight: 500;
      letter-spacing: 0.7px;
      margin-bottom: 8px;
    }
  }
  & > p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 12px;
    font-weight: 500;
  }
`;

const BackGround = styled.div`
  background-color: #a0b4b7;
  background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");

  width: 100%;
  padding: 27px 0;
  position: absolute;
  z-index: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const HorizontalLine = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;

const StatsViewNo = styled.div`
  color: blue;
  font-size: 12px;
  margin-top: 1px;
  text-align: right;
`;

const ProfileStats = styled.div`
  color: rgba(0, 0, 0, 0.6);
  padding: 6px 14px;
  display: grid;
  grid-template-columns: 135px 20px;
  justify-content: space-between;
  & > p {
    font-size: 12px;
    line-height: 1.4;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`;

const Subscribe = styled.div`
  margin: 12px 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  line-height: 1.2;
`;

const MyItems = styled.div`
  padding: 14px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;

  & > p {
    margin-left: 6px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    cursor: pointer;
  }
`;
