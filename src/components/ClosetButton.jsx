/* 옷장_메뉴 버튼
 * [기능]
 * 1. 버튼 클릭 시 색상 변경
 * 2. 버튼 클릭 시 필터링
 *   - ALL 클릭 시 전체 ON
 *   - Menu 클릭 시 해당 메뉴 ON
 */

import React, { useState } from "react";

const ClosetButton = ({ name, index, status, handleStatus }) => {
  const [clicked, setClicked] = useState({ status });

  const handleMenuClick = () => {
    // setClicked(!clicked);
    console.log("status: ", status);
    handleStatus(`status${index + 1}`);
  };

  // 1. all 클릭 시 전체 on
  // 2. top 클릭 시 top on
  return (
    // 메뉴 토글 버튼
    status === true ? (
      <button
        className={`flex justify-center items-center w-10 h-3 px-10 py-4 border rounded-md bg-blue-500 text-white`}
        onClick={handleMenuClick}
      >
        {name}
      </button>
    ) : (
      <button
        className={`flex justify-center items-center w-10 h-3 px-10 py-4 border rounded-md bg-white text-black`}
        onClick={handleMenuClick}
      >
        {name}
      </button>
    )
  );
};

export default ClosetButton;
