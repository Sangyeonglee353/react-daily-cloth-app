import React, { useState } from "react";
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
    ["블라우스", "긴팔 티", "면바지", "슬랙스"],
    ["반팔", "얇은 셔츠", "반바지", "면바지"],
    ["민소매", "반팔", "반바지", "짧은 치마", "린넨 옷"],
  ];

  const getCloth = (temp) => {
    // 문자열을 숫자로 변환
    const tempNum = parseInt(temp);
    if (tempNum < 5) {
      return cloths[0];
    } else if (tempNum >= 5 && tempNum < 9) {
      return cloths[1];
    } else if (tempNum >= 9 && tempNum < 12) {
      return cloths[2];
    } else if (tempNum >= 12 && tempNum < 17) {
      return cloths[3];
    } else if (tempNum >= 17 && tempNum < 20) {
      return cloths[4];
    } else if (tempNum >= 20 && tempNum < 23) {
      return cloths[5];
    } else if (tempNum >= 23 && tempNum < 28) {
      return cloths[6];
    } else {
      return cloths[7];
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* <div>현재 온도: {temperature} ℃</div> */}
      <div>
        <ul className="flex">
          {getCloth(temperature).map((item, index) => (
            <li className="w-[100px] h-[100px] bg-slate-400 mx-5">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TempCloth;
