// Color 매칭을 도와주기 위한 컴포넌트
/*
 * 옷 색상 조합 유형(https://mojikmo.com/%EB%82%A8%EC%9E%90-%EC%98%B7-%EC%83%89%EC%83%81-%EC%A1%B0%ED%95%A9/)
 * (1) 톤온톤: 같은 색, 다른 톤
 * (2) 톤인톤: 다른 색, 같은 톤
 * 표기 방식
 * (1) 방사형 그래프
 * (2) 세로형 막대 그래프
 *
 * [구현 1]
 * 1. 배열에 각 색상들로 나열
 * 2. 배열에 색상을 상의/하의 옷에 대입
 * 3. 다른 옷도 추가
 * 4. COLOR 보색 템플릿 생성
 *
 */
import React, { useState } from "react";
import shirtsIcon from "../assets/images/shirts.svg";
import pantsIcon from "../assets/images/pants.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./colorMap.css";

const ColorMap = () => {
  const colorTable = {
    "A+": [
      ["bg-[#FFFFFF]", "bg-[#68CAFE]"],
      ["bg-[#FFFFFF]", "bg-[#0570A8]"],
      ["bg-[#FFFFFF]", "bg-[#EDDDB4]"],
      ["bg-[#FFFFFF]", "bg-[#000000]"],
      ["bg-[#F5F0DB]", "bg-[#68CAFE]"],
      ["bg-[#F5F0DB]", "bg-[#EDDDB4]"],
      ["bg-[#F5F0DB]", "bg-[#A10203]"],
      ["bg-[#F5F0DB]", "bg-[#000000]"],
      ["bg-[#FECBFB]", "bg-[#68CAFE]"],
      ["bg-[#01205F]", "bg-[#A10203]"],
      ["bg-[#000000]", "bg-[#000000]"],
      ["bg-[#A6A5A6]", "bg-[#000000]"],
    ],
    A: [
      ["bg-[#FFFFFF]", "bg-[#034F01]"],
      ["bg-[#FFFFFF]", "bg-[#A10203]"],
      ["bg-[#F5F0DB]", "bg-[#0570A8]"],
      ["bg-[#FD0403]", "bg-[#A10203]"],
      ["bg-[#FECBFB]", "bg-[#0570A8]"],
      ["bg-[#FECBFB]", "bg-[#EDDDB4]"],
      ["bg-[#FECBFB]", "bg-[#000000]"],
      ["bg-[#FDBF0F]", "bg-[#0570A8]"],
      ["bg-[#F3EE04]", "bg-[#68CAFE]"],
      ["bg-[#F3EE04]", "bg-[#0570A8]"],
      ["bg-[#F3EE04]", "bg-[#EDDDB4]"],
      ["bg-[#F3EE04]", "bg-[#A10203]"],
      ["bg-[#01A402]", "bg-[#0570A8]"],
      ["bg-[#06B0F1]", "bg-[#EDDDB4]"],
      ["bg-[#06B0F1]", "bg-[#A10203]"],
      ["bg-[#06B0F1]", "bg-[#000000]"],
      ["bg-[#01205F]", "bg-[#68CAFE]"],
      ["bg-[#01205F]", "bg-[#0570A8]"],
      ["bg-[#01205F]", "bg-[#EDDDB4]"],
      ["bg-[#000000]", "bg-[#0570A8]"],
      ["bg-[#000000]", "bg-[#EDDDB4]"],
    ],
    B: [
      ["bg-[#FD0403]", "bg-[#EDDDB4]"],
      ["bg-[#FD0403]", "bg-[#000000]"],
      ["bg-[#FECBFB]", "bg-[#034F01]"],
      ["bg-[#FECBFB]", "bg-[#A10203]"],
      ["bg-[#FDBF0F]", "bg-[#68CAFE]"],
      ["bg-[#FDBF0F]", "bg-[#EDDDB4]"],
      ["bg-[#FDBF0F]", "bg-[#A10203]"],
      ["bg-[#FDBF0F]", "bg-[#000000]"],
      ["bg-[#F3EE04]", "bg-[#034F01]"],
      ["bg-[#F3EE04]", "bg-[#000000]"],
      ["bg-[#01A402]", "bg-[#68CAFE]"],
      ["bg-[#01A402]", "bg-[#EDDDB4]"],
      ["bg-[#01A402]", "bg-[#A10203]"],
      ["bg-[#01A402]", "bg-[#000000]"],
      ["bg-[#06B0F1]", "bg-[#0570A8]"],
      ["bg-[#01205F]", "bg-[#034F01]"],
      ["bg-[#01205F]", "bg-[#000000]"],
      ["bg-[#000000]", "bg-[#68CAFE]"],
      ["bg-[#000000]", "bg-[#034F01]"],
      ["bg-[#000000]", "bg-[#A10203]"],
      ["bg-[#A6A5A6]", "bg-[#0570A8]"],
      ["bg-[#A6A5A6]", "bg-[#EDDDB4]"],
      ["bg-[#A6A5A6]", "bg-[#A10203]"],
    ],
    C: [
      ["bg-[#FD0403]", "bg-[#68CAFE]"],
      ["bg-[#FD0403]", "bg-[#0570A8]"],
      ["bg-[#FDBF0F]", "bg-[#034F01]"],
      ["bg-[#01A402]", "bg-[#034F01]"],
      ["bg-[#06B0F1]", "bg-[#68CAFE]"],
    ],
    F: [
      ["bg-[#FD0403]", "bg-[#034F01]"],
      ["bg-[#06B0F1]", "bg-[#034F01]"],
      ["bg-[#A6A5A6]", "bg-[#034F01]"],
    ],
  };

  const [tab, setTab] = useState(0);

  const menuList = {
    menuName: ["Basic", "Season", "Prefer"],
  };

  const selecMenuHandler = (index) => {
    setTab(index);
  };

  return (
    <div>
      <ul className="w-full h-10 flex justify-around items-center bg-slate-500">
        {menuList["menuName"].map((menu, index) => (
          <li
            className="w-1/3 h-full flex justify-center items-center bg-gray-200 cursor-pointer"
            key={index}
          >
            {menu}
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true} // 무한 반복
          mousewheel={true} // 마우스 휠
          coverflowEffect={{
            rotate: -5, // 회전 각도
            stretch: 50, // 겹침정도
            depth: 100, // 깊이감도
            modifier: 1,
            slideShadows: true,
            scale: 1, // 크기
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {/* <div className="w-[300px]"> */}
          {colorTable["A+"].map((colors, index) => (
            <SwiperSlide key={index}>
              <ul className="w-[150px] h-auto flex flex-col">
                <li
                  className={`w-[150px] h-[150px] flex justify-center items-center border-solid border-2 border-black ${colors[0]} my-2 rounded-2xl`}
                >
                  {`${colors[0].slice(4, 11)}`}
                </li>
                <li
                  className={`w-[150px] h-[150px] flex justify-center items-center border-solid border-2 border-black ${colors[1]} rounded-2xl`}
                >
                  {`${colors[1].slice(4, 11)}`}
                </li>
              </ul>
            </SwiperSlide>
          ))}
          {/* </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default ColorMap;
