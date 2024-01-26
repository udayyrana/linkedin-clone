import React from "react";
import "./RightComponent.css";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";

function RightComponent() {
  return (
    <>
      <div className="right">
        <div className="rightContents">
          <RightHeadline>Linkedin News</RightHeadline>
          <InfoIcon />
        </div>
        <p className="paraUl">
          <ul>
            <li><a href="/">Carelon to hire thousands</a></li>
          </ul>
          <ul>
            <li><a href="/">Carelon to hire thousands</a></li>
          </ul>
          <ul>
            <li><a href="/">Carelon to hire thousands</a></li>
          </ul>
          <ul>
            <li><a href="/">Carelon to hire thousands</a></li>
          </ul>
          <ul>
            <li><a href="/">Carelon to hire thousands</a></li>
          </ul>
        </p>
        <button className="showMore">Show more</button>
      </div>
    </>
  );
}

export default RightComponent;

const RightHeadline = styled.h2`
  font-weight: 500;
  letter-spacing: 1px;
`;
