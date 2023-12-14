import React, { useState } from "react";

const ClosetButton = ({ name }) => {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState({
    "bg-color": "bg-white",
    "font-color": "black",
  });

  const handleMenuClick = () => {
    setClicked(!clicked);
    console.log("clicked: ", clicked);

    if (color["bg-color"] === "bg-white") {
      setColor((prev) => ({
        "bg-color": "bg-blue-500",
        "font-color": "text-white",
      }));
    } else {
      setColor((prev) => ({
        "bg-color": "bg-white",
        "font-color": "text-black",
      }));
    }
  };

  return (
    // 메뉴 토글 버튼
    <button
      className={`flex justify-center items-center w-10 h-3 px-10 py-4 border rounded-md ${color["bg-color"]} ${color["font-color"]}`}
      onClick={handleMenuClick}
    >
      {name}
    </button>
    // <button className={`${color}`} onClick={handleMenuClick}>
    //   {name}
    // </button>
  );
};

export default ClosetButton;
