/* 옷장_메뉴 버튼
 * [기능]
 * 1. 버튼 클릭 시 색상 변경
 * 2. 버튼 클릭 시 필터링
 *
 *
 */

import React, { useState } from "react";

const ClosetButton = ({ name, status, handleStatus }) => {
  const [clicked, setClicked] = useState({ status });
  const [color, setColor] = useState({
    "bg-color": "bg-white",
    "font-color": "black",
  });

  const handleMenuClick = () => {
    // setClicked(!clicked);
    handleStatus(status);

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

  // 1. all 클릭 시 전체 on
  // 2. top 클릭 시 top on
  return (
    // 메뉴 토글 버튼
    <button
      className={`flex justify-center items-center w-10 h-3 px-10 py-4 border rounded-md ${color["bg-color"]} ${color["font-color"]}`}
      onClick={handleMenuClick}
    >
      {name}
    </button>
  );
};

export default ClosetButton;
