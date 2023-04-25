import React, { useState } from "react";

const videoList = ["approval.mp4", "business.mp4", "concentration.mp4", "eggs.mp4", "fool.mp4", "future.mp4", "heart.mp4", "honor.mp4", "ladder.mp4", "laughter.mp4", "line.mp4", "older.mp4", "power.mp4", "success.mp4", "wise.mp4", "work.mp4"];
const numVideos = videoList.length;

export default function Body() {
  const [videoName,setVideo] = useState("work.mp4");

  function changeMotivationVideo() {
    var index = Math.floor(Math.random() * numVideos)
    console.log(index);
    setVideo(videoList[Math.floor(Math.random() * numVideos)]);
  }

  return (
    <div className="body">
      <br></br>
      {/* <div class="frame"> */}
      <div>
        <video src={"farnamvideos/"+videoName} id="vid" width="500" height="500" autoPlay controls/>
      </div>
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