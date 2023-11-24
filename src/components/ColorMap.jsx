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
 * [추가 기능 구현]
 * 1. 슬라이드 자동 재생, 중지 기능
 * 2. A+, A, B, C ,F 선택
 *
 */
import React, { useState } from "react";
import shirtsIcon from "../assets/images/shirts.svg";
import pantsIcon from "../assets/images/pants.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
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
  const [gradeIndex, setGradeIndex] = useState(0);

  const menuList = {
    menuName: ["Basic", "Season", "Prefer"],
  };

  const grades = ["A+", "A", "B", "C", "F"];

  const handleGradeIndex = (idx) => {
    setGradeIndex(idx);
    console.log(grades[`${gradeIndex}`]);
    // console.log(colorTable[grades[`${gradeIndex}`]]);
  };

  return (
    <div>
      <ul className="flex justify-center mt-2 z-2">
        {grades.map((grade, index) => (
          <React.Fragment key={index}>
            {index === gradeIndex ? (
              <li
                className="flex justify-center items-center bg-[#7FF5F2] w-[10px] h-[10px] rounded-full p-6 mx-5 cursor-pointer"
                onClick={() => handleGradeIndex(index)}
              >
                {grade}
              </li>
            ) : (
              <li
                className="flex justify-center items-center bg-gray-300 w-[10px] h-[10px] rounded-full p-6 mx-5 hover:bg-[#7FF5F2] cursor-pointer"
                onClick={() => handleGradeIndex(index)}
              >
                {grade}
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={"auto"}
          slidesPerView={3} // 보여지는 슬라이드의 개수: 반응형 적용 필요
          breakpoints={{
            // 화면 크기에 따라 슬라이드 개수 조정
            768: {
              slidesPerView: 7,
              coverflowEffect: {
                rotate: 10, // 회전 각도
                stretch: 10, // 겹침정도
                depth: 100, // 깊이감도
                modifier: 1,
                slideShadows: false,
                scale: 1, // 크기
              },
            },
          }}
          // loopedSlides={3} // 반복 시 균형 조절
          centerInsufficientSlides={true}
          centeredSlidesBounds={true}
          mousewheel={true} // 마우스 휠
          coverflowEffect={{
            rotate: 10, // 회전 각도
            stretch: 180, // 겹침정도
            depth: 100, // 깊이감도
            modifier: 0.5, // 효과강도(0~1)
            slideShadows: false,
            scale: 1, // 크기
          }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          // modules={[EffectCoverflow, Pagination, Autoplay]} // 오토 플레이
          // onSwiper={(swiper) => {
          //   // swiper 변수를 사용하여 Swiper 인스턴스에 접근할 수 있음
          //   swiper.autoplay.start(); // Swiper 로드 시 자동 재생 시작
          // }}
          // onSlideChange={() => {
          //   // 슬라이드 변경 이벤트 발생 시 자동 재생 다시 시작
          //   const swiper = document.querySelector(".mySwiper").swiper;
          //   swiper.autoplay.start();
          // }}
          className="mySwiper"
        >
          {colorTable[grades[`${gradeIndex}`]].map((colors, index) => (
            <SwiperSlide key={index}>
              <ul className="w-[100px] md:w-[150px] h-auto flex flex-col">
                <li
                  className={`w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex justify-center items-center border-solid border-2 border-black ${colors[0]} my-2 rounded-2xl`}
                >
                  {`${colors[0].slice(4, 11)}`}
                </li>
                <li
                  className={`w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex justify-center items-center border-solid border-2 border-black ${colors[1]} rounded-2xl`}
                >
                  {`${colors[1].slice(4, 11)}`}
                </li>
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ColorMap;
