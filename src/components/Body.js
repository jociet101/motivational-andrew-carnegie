import React, { useState } from "react";

const videoList = ["movie.mp4", "southpark.mp4"];
const numVideos = videoList.length;

export default function Body() {
  const [videoName,setVideo] = useState("southpark.mp4");

  function changeMotivationVideo() {
    var index = Math.floor(Math.random() * numVideos)
    console.log(index);
    setVideo(videoList[Math.floor(Math.random() * numVideos)]);
  }

  return (
    <div className="body">
      <video src={videoName} width="450" height="450" autoPlay controls />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="button-motivation" onClick={changeMotivationVideo}>
        Motivate me!
      </button>
    </div>
  );
}