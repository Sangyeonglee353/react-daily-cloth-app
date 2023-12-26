import React from "react";

const ClosetItem = (props) => {
  return (
    <li className="w-full h-[200px] bg-gray-300 rounded-md">
      {/* {console.log("ClosetItem Data: ", props.image.src)} */}
      <img
        src={require(`../assets/images/closet/top/${props.image.src}`)}
        alt={props.image.name}
        className="bg-cover-fit"
      />
    </li>
  );
};

export default ClosetItem;

// <li key={index}>
//   <img
//     src={require(`../assets/images/closet/top/${image.src}`)}
//     alt={image.name}
//   />
// </li>;

// <div className="w-full h-[200px] bg-gray-300 rounded-md"></div>;
