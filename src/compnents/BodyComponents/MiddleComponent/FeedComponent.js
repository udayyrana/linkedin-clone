import React from "react";
import "./FeedComponent.css";
import styled from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import LoopIcon from "@mui/icons-material/Loop";
import RecommendTwoToneIcon from "@mui/icons-material/RecommendTwoTone";
import ReactPlayer from "react-player";

function FeedComponent(props) {
  return (
    <Feed id={props.id}>
      <div className="userFeedInfo">
        <img className="userImg" src={props.userImage} alt="" />
        <div className="userInfo">
          <a>
            <h5>{props.userName}</h5>
          </a>
          <p>{props.headline}</p>
          <span>{props.time}</span>
        </div>
      </div>
      <p className="userContent">{props.userContent}</p>
      {props.userFeedImage && (
        <img className="userFeedImg" src={props.userFeedImage} alt="" />
      )}
      {props.userFeedVideo && (
        <ReactPlayer
          style={{ marginTop: "12px" }}
          url={props.userFeedVideo}
          width="100%"
        />
      )}
      <div className="likeCount">
        <RecommendTwoToneIcon fontSize="small" />
        <a>
          {props.likeCount > 2 ? props.likeCount + " others" : props.likeCount}
        </a>
      </div>
      <HorizontalLine />
      <div className="feedActivity">
        <button>
          <ThumbUpOffAltIcon />
          <span>Like</span>
        </button>
        <button>
          <CommentIcon />
          <span>Comment</span>
        </button>
        <button>
          <LoopIcon />
          <span>Repost</span>
        </button>
        <button>
          <SendIcon />
          <span>Send</span>
        </button>
      </div>
    </Feed>
  );
}

export default FeedComponent;

const Feed = styled.div`
  .userFeedInfo {
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
  .userImg {
    width: 45px;
    border-radius: 50%;
  }
  .userInfo {
    margin-left: 8px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > a {
      &:hover {
        color: #378fe9;
        cursor: pointer;
        text-decoration: underline;
      }
      & > h5 {
        font-weight: 500;
        letter-spacing: 0.5px;
      }
    }
    & > p {
      font-size: 12px;
      display: inline-block;
    }
    & > span {
      font-size: 10px;
    }
  }

  .userContent {
    margin: 16px 16px 0 20px;
    font-size: 13px;
    line-height: 1.5;
    letter-spacing: 0.6px;
  }

  & > img {
    width: 100%;
    margin-top: 12px;
  }

  .feedActivity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 16px 2px 16px;
  }
  .feedActivity > button {
    display: flex;
    align-items: center;
    border: none;
    padding: 12px 14px;
    background: transparent;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.6);
  }

  .feedActivity > button:hover {
    background-color: rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
  .likeCount {
    &:hover {
      cursor: pointer;
      color: #378fe9;
      a {
        color: #378fe9;
        text-decoration: underline;
      }
    }
    margin: 4px 16px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #378fe9;

    & > a {
      color: rgba(0, 0, 0, 0.6);
      /* font-weight: 500; */
      margin-left: 4px;
    }
  }
`;

const HorizontalLine = styled.div`
  margin: 8px 16px 6px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;
