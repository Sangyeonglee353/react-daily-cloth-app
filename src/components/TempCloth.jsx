import React, { useState } from "react";

import under5 from "../assets/images/cloth/under5.png";
import to59 from "../assets/images/cloth/to59.png";
import to912 from "../assets/images/cloth/to912.png";
import to1217 from "../assets/images/cloth/to1217.png";
import to1720 from "../assets/images/cloth/to1720.png";
import to2023 from "../assets/images/cloth/to2023.png";
import to2328 from "../assets/images/cloth/to2328.png";
import upper28 from "../assets/images/cloth/upper28.png";
/*
* [구현 전]
* - 슬롯 머신처럼 나오는 효과

*/
const TempCloth = ({ temperature }) => {
  const cloths = [
    ["패딩", "두꺼운 코트", "누빔 옷", "기모", "목도리"],
    ["울 코트", "히트텍", "가죽 옷", "기모"],
    ["트렌치 코트", "야상", "점퍼", "스타킹", "기모바지"],
    ["자켓", "가디건", "청자켓", "니트", "스타킹", "청바지"],
    ["얇은 가디건", "얇은 니트", "맨투맨", "후드", "긴 바지"],
    ["와이셔츠", "긴팔 티", "면바지", "슬랙스"],
    ["반팔", "얇은 셔츠", "반바지", "면바지"],
    ["민소매", "반팔", "반바지", "짧은 치마", "린넨 옷"],
  ];

  const clothImages = [
    under5,
    to59,
    to912,
    to1217,
    to1720,
    to2023,
    to2328,
    upper28,
  ];

  const getCloth = (temp) => {
    // 문자열을 숫자로 변환
    const tempNum = parseInt(temp);
    if (tempNum < 5) {
      return 0;
    } else if (tempNum >= 5 && tempNum < 9) {
      return 1;
    } else if (tempNum >= 9 && tempNum < 12) {
      return 2;
    } else if (tempNum >= 12 && tempNum < 17) {
      return 3;
    } else if (tempNum >= 17 && tempNum < 20) {
      return 4;
    } else if (tempNum >= 20 && tempNum < 23) {
      return 5;
    } else if (tempNum >= 23 && tempNum < 28) {
      return 6;
    } else {
      return 7;
    }
  };

  return (
    <div className="w-full h-[150px] flex justify-center items-center">
      {/* <div>현재 온도: {temperature} ℃</div> */}
      <div className="flex flex-col justify-center items-center">
        <img
          src={clothImages[getCloth(temperature)]}
          className="w-[50%]"
          alt="img"
        />
        <ul className="flex">
          {cloths[getCloth(temperature)].map((item, index) => (
            <li className="mx-5">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TempCloth;
