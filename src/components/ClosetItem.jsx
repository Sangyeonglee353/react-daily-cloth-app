import React from "react";

const ClosetItem = (props) => {
  return (
    <li className="w-full h-[200px] flex justify-center bg-gray-300 rounded-md">
      {/* {console.log("ClosetItem Data: ", props.image.src)} */}
      <img
        src={require(`../assets/images/closet/top/${props.image.src}`)}
        alt={props.image.name}
        className="bg-cover h-full"
      />
    </li>
  );
};

export default ClosetItem;
