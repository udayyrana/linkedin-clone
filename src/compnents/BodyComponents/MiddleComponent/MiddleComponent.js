import React from "react";
import FeedComponent from "./FeedComponent";
import "./MiddleComponent.css";
import PostComponent from "./PostComponent";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useState } from "react";

const startingFeeds = [
  {
    id: uuidv4(),
    userimage: "images/user.svg",
    username: "Uday Singh Rana",
    headline: "Fresher",
    time: new Date().toLocaleTimeString(),
    userContent: "Hey",
    image: "",
    // video: "https://www.youtube.com/embed/q_S9BMvfHAc",
    likeCount: 157,
  },
  {
    id: uuidv4(),
    userimage: "images/user.svg",
    username: "UserName",
    headline: "Headline",
    time: new Date().toLocaleTimeString(),
    userContent: "Hello",
    image:
      "https://assets.volkswagen.com/is/image/volkswagenag/Volkswagen-Big-Rush-Virtus?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9OTYwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmI0NjI=",
    likeCount: 157,
  },
  {
    id: uuidv4(),
    username: "UserName",
    headline: "Headline",
    userimage: "images/user.svg",
    time: new Date().toLocaleTimeString(),
    userContent: "",
    image:
      "https://assets.volkswagen.com/is/image/volkswagenag/Volkswagen-Big-Rush-Virtus?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZoZWk9OTYwJmFsaWduPTAuMDAsMC4wMCZiZmM9b2ZmJmI0NjI=",
    likeCount: 120,
  },
  {
    id: uuidv4(),
    username: "UserName",
    headline: "Headline",
    userimage: "images/user.svg",
    userContent: "Hi",
    time: new Date().toLocaleTimeString(),
    image: null,
    likeCount: 3,
  },
];

function MiddleComponent() {
  const [feeds, setFeeds] = useState(startingFeeds);

  function handleFeed(inputValue, imageURL, videoURL) {
    setFeeds(function (prevValue) {
      const userInp = {
        id: uuidv4(),
        username: "UserName",
        headline: "Headline",
        userimage: "images/user.svg",
        userContent: inputValue,
        time: new Date().toLocaleTimeString(),
        video:videoURL,
        image: imageURL,
        likeCount: 0,
      };
      return [userInp, ...prevValue];
    });
  }

  return (
    <div>
      <div className="postComp">
        {/* Post Component */}
        <PostComponent handleFeed={handleFeed} />
      </div>
      <div className="sortBy">
        <HorizontalLine />
        <span>
          Sort By: <strong style={{ color: "black" }}>Top</strong>
        </span>
      </div>

      {feeds.map((ele) => {
        return (
          <div className="feedComp" key={ele.id}>
            <FeedComponent
              id={ele.id}
              userImage={ele.userimage}
              userName={ele.username}
              headline={ele.headline}
              time={ele.time}
              userContent={ele.userContent}
              userFeedImage={ele.image}
              userFeedVideo={ele.video}
              likeCount={ele.likeCount}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MiddleComponent;

const HorizontalLine = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-right: 8px;
  flex: 1;
`;
