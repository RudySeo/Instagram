import { Divider } from "@material-ui/core";
import React from "react";
import Content from "./feedcontent/content";
// import FeedCarousel from "./Carousel";
import User from "./feedItem/user";

const FeedItem = () => {
  // props Feed Item
  // Feed.user_nickname
  // Fedd.img
  // Fedd Comments pros Comments , contents.
  return (
    <>
      <User />
      {/* {data.length > 1 ? (
        <FeedCarousel />
        ) : ( */}
      <img className="feedImg" src="../imgs/feedimg.jpeg" alt="피드 이미지" />
      {/* )} */}
      <Content />
    </>
  );
};

export default FeedItem;
