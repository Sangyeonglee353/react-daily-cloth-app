import React from "react";

const ClosetItem = ({ image, menu }) => {
  return (
    <li className="w-full h-[200px] flex justify-center bg-gray-300 rounded-md">
      <img
        src={require(`../assets/images/closet/${image.type}/${image.src}`)}
        alt={image.name}
        className="bg-cover h-full"
      />
    </li>
  );
};

export default ClosetItem;
