import React from "react";
import "./PostComponent.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, 0)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

function PostComponent(props) {
  const [open, setOpen] = React.useState(false);
  const [inputState, setInputState] = useState("");
  const [imageState, setImageState] = useState(false);
  const [imageURLState, setImageURLState] = useState("");
  const [videoURLState, setVideoURLState] = useState("");

  const handleImage = (event) =>{
    setImageURLState(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (inputState.length !== 0 || imageURLState.length!==0) {
      props.handleFeed(inputState, imageURLState);
      setInputState("");
      setImageURLState("");
      setOpen(false);
    }
  }
  
  function handleInputState(event) {
    setInputState(event.target.value);
  }
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false)
    setInputState("");
    setImageState(false);
    setImageURLState("");
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <p id="modal-modal-title">Create a post</p>
            <br />
            <div className="modalPost">
              <img className="userPost" src="/images/user.svg" alt="" />
              <div>
                <p>Username</p>
                <button>🌎 Anyone</button>
              </div>
            </div>
            <div id="modal-modal-description">
              <textarea
                className="modalInput"
                placeholder="What do you want to talk about?"
                onInput={handleInputState}
                value={inputState}
                autoFocus
              />
            </div>
            <div className="modalPostBtn">
              <div className="modalPostBtns">
                <a className="modalBtn">
                  <InsertPhotoIcon onClick={()=>{!imageState?setImageState(true):setImageState(false)}}/>
                  {imageState == true && <input type="text" value={imageURLState} onChange={handleImage} placeholder="Enter your image URL here"/>}
                </a>
                <a className="modalBtn">
                  <YouTubeIcon />
                </a>
                <a className="modalBtn">
                  <EventIcon />
                </a>
                <a className="modalBtn">
                  <NewspaperIcon />
                </a>
              </div>
              <button type="submit" className="modalPostButton">
                Post
              </button>
            </div>
          </form>
        </Box>
      </Modal>
      <div className="post">
        <img className="userPost" src="/images/user.svg" alt="" />
        <a id="myBtn" className="postInput" onClick={handleOpen}>
          Start a post
        </a>
      </div>
      <div className="inputButtons">
        <button className="photoBtn">
          <InsertPhotoIcon />
          <span>Photo</span>
        </button>
        <button className="videoBtn">
          <YouTubeIcon /> <span>Video</span>
        </button>
        <button className="eventBtn">
          <EventIcon />
          <span>Event</span>
        </button>
        <button className="articleBtn">
          <NewspaperIcon /> <span>Write Article</span>
        </button>
      </div>
    </>
  );
}

export default PostComponent;
