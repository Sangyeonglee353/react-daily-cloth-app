import React from "react";
import ClosetItem from "./ClosetItem";

const ClosetItemList = ({ imageList, menu }) => {
  return (
    <>
      {imageList.map((image, index) => (
        <ClosetItem key={index} image={image} menu={menu} />
      ))}
    </>
  );
};

export default ClosetItemList;
