import React, { useState } from "react";

const ClosetButton = ({ menuName }) => {
  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => {
    setClicked(!clicked);
    console.log("clicked: ", clicked);
  };

  return (
    <button
      className="flex justify-center items-center w-10 h-3 px-8 py-4 bg-stone-500 border rounded-md"
      onClick={handleMenuClick}
    >
      menu
    </button>
  );
};

export default ClosetButton;
