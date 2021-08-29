import React, { useState } from "react";
import Content from "./feedcontent/content";
// import FeedCarousel from "./Carousel";
import { FEEDITEM } from "../../../pages/feed";
import User from "./feedItem/user";
import Modal from "../../common/modal/modal";

interface Props {
  item: FEEDITEM;
}
const FeedItem = ({ item }: Props) => {
  const [modal, setmodal] = useState<boolean>(false);

  const toggleModal = () => {
    setmodal(() => !modal);
  };
  
  return (
    <>
      <div className="feedItem">
        <User item={item} toggleModal={toggleModal} />
        {/* {data.length > 1 ? (
        <FeedCarousel />
        ) : ( */}
        <div className="img">
          <img
            className="feedImg"
            src={item.image || "../imgs/feedimg.jpeg"}
            // src={item.image ? "../imgs/feedimg.jpeg" : undefined}
            alt="피드 이미지"
          />
        </div>
        {/* )} */}
        <Content item={item} />
      </div>
      {/* modal  */}
      {modal && <Modal feedId={item.id} closeModal={toggleModal} />}
    </>
  );
};

export default FeedItem;
