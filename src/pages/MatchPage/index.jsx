/* 날씨에 맞는 옷 추천 페이지 */
/** 세부 기능
 * 1. 날씨 표시
 * - 지역 선택(Kakao map 연결 & 위도 경도 정보 가져오기)
 * - 날씨 가져오기(위도, 경도와 날씨 API의 위도, 경도값 매칭)
 *  - 버전 1. 드롭다운 형식
 *  - 버전 2. kakao map -> 해당 위/경도와 가장 비슷한 값의 지역구의 날씨 정보 출력
 * - 날씨 표시하기
 * 2. 날씨별 추천 시스템
 * - 색상
 * - 옷 유형
 * 3. 옷장 매칭 시스템
 * - 옷장에 있는 옷과 위 추천 내용과 일치하는 내용 출력
 * **/
import { useEffect, useState } from "react";
import coordinateRawData from "../../assets/data/coordinateRawData";

const MatchPage = () => {
  const [coordinateData, setCoordinateData] = useState(null);
  const [sectorOne, setSectorOne] = useState([]);
  const [sectorTwo, setSectorTwo] = useState([]);
  const [sectorThree, setSectorThree] = useState([]);
  const [sectorOneValue, setSectorOneValue] = useState("");
  const [sectorTwoValue, setSectorTwoValue] = useState("");
  const [sectorThreeValue, setSectorThreeValue] = useState("");
  const [latitude, setLatitude] = useState(""); // 위도
  const [longitude, setLongitude] = useState(""); // 경도

  useEffect(() => {
    setCoordinateData(coordinateRawData);
  }, []);

  useEffect(() => {
    if (coordinateData != null) {
      handleSectorData();
    }
  }, [coordinateData, sectorOne, sectorTwo, sectorThree]);

  useEffect(() => {}, [latitude, longitude]);

  const handleSectorData = () => {
    console.log("coordinateData: ", coordinateData[0]["1단계"]);
    console.log("coordinateData length: ", coordinateData.length);
    console.log("sectorOne length: ", sectorOne.length);
    console.log("sectorTwo length: ", sectorTwo.length);
    console.log("sectorThree length: ", sectorThree.length);

    coordinateData.forEach((data) => {
      const firstStep = data["1단계"];
      const secondStep = data["2단계"];
      const thirdStep = data["3단계"];

      if (firstStep) {
        if (!sectorOne.includes(firstStep)) {
          setSectorOne([...sectorOne, firstStep]);
        }
      }
      if (secondStep) {
        if (!sectorTwo.includes(secondStep)) {
          setSectorTwo([...sectorTwo, secondStep]);
        }
      }
      if (thirdStep) {
        if (!sectorThree.includes(thirdStep)) {
          setSectorThree([...sectorThree, thirdStep]);
        }
      }
    });
  };

  const findCoordinates = (level1, level2, level3) => {
    const matchingData = coordinateData.find((data) => {
      return (
        data["1단계"] === level1 &&
        data["2단계"] === level2 &&
        data["3단계"] === level3
      );
    });

    if (matchingData) {
      const latitude = `${matchingData["위도(시)"]}° ${matchingData["위도(분)"]}′ ${matchingData["위도(초)"]}″`;
      const longitude = `${matchingData["경도(시)"]}° ${matchingData["경도(분)"]}′ ${matchingData["경도(초)"]}″`;
      setLatitude(latitude);
      setLongitude(longitude);
    } else {
      return alert("데이터를 찾을 수 없습니다.");
    }
  };

  const handleSectorOneSelectChange = (event) => {
    const selectedOptionValue = event.target.value;
    setSectorOneValue(selectedOptionValue);
  };
  const handleSectorTwoSelectChange = (event) => {
    const selectedOptionValue = event.target.value;
    setSectorTwoValue(selectedOptionValue);
  };
  const handleSectorThreeSelectChange = (event) => {
    const selectedOptionValue = event.target.value;
    setSectorThreeValue(selectedOptionValue);
  };

  return (
    <section name="match" className="flex w-full h-screen">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Weather Info</h2>
          <div className="xl:flex xl:flex-row ">
            <div className="flex flex-col xl:w-[500px] py-6 text-3xl justify-center items-center xl:items-left">
              <div className="flex">
                <label htmlFor="sectorOneSelect" className="px-5 py-2">
                  구역 1
                </label>
                <select
                  id="sectorOneSelect"
                  onChange={handleSectorOneSelectChange}
                  value={sectorOneValue}
                  className="w-[300px]"
                >
                  <option value="" selected>
                    선택안함
                  </option>
                  {sectorOne.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex">
                <label htmlFor="sectorTwoSelect" className="px-5 py-2">
                  구역 2
                </label>
                <select
                  id="sectorTwoSelect"
                  onChange={handleSectorTwoSelectChange}
                  value={sectorTwoValue}
                  className="w-[300px]"
                >
                  <option value="" selected>
                    선택안함
                  </option>
                  {sectorTwo.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex">
                <label htmlFor="sectorThreeSelect" className="px-5 py-2">
                  구역 3
                </label>
                <select
                  id="sectorThreeSelect"
                  onChange={handleSectorThreeSelectChange}
                  value={sectorThreeValue}
                  className="w-[300px]"
                >
                  <option value="" selected>
                    선택안함
                  </option>
                  {sectorThree.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="mt-3 py-2 md:w-[450px]"
                onClick={() =>
                  findCoordinates(
                    sectorOneValue,
                    sectorTwoValue,
                    sectorThreeValue
                  )
                }
              >
                Find Cooridnates
              </button>
            </div>
            <div className="flex flex-col py-6 text-3xl justify-center items-center">
              <span className="px-5">위도: {latitude}</span>
              <span className="px-5">경도: {longitude}</span>
            </div>
          </div>
        </div>

        <p className="mt-20 text-xl">Weather Info</p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default MatchPage;
