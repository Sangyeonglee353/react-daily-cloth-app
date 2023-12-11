/* 날씨에 맞는 옷 추천 페이지 */
/** 세부 기능
 * 1. 카카오맵과 날씨 표시
 * - 지역 선택(Kakao map 연결 & 위도 경도 정보 가져오기)
 * - 날씨 가져오기(위도, 경도와 날씨 API의 위도, 경도값 매칭)
 *  - 버전 1. 드롭다운 형식 (X)
 *  - 버전 2. kakao map -> 해당 위/경도와 가장 비슷한 값의 지역구의 날씨 정보 출력
 *    [추가 기능] 현재 GPS 정보를 기반으로 날씨 확인
 * 2. 날씨별 추천 시스템
 * - 색상: 과연 색상을 어떻게 보여주는 것이 가장 Best일 것인가?
 *   - 색상 조합(2~3가지)
 *   - 1단계: 날씨에 어울리는 색상 나열
 *   - 2단계: 4분위표 그래프를 보여주고 해당하는 영역 마스킹
 *   - 전체 구상, 기본적으로 날씨에 따른 색상만 추천 -> 추가로 옷 추천
 * - 옷 유형
 * 3. 옷장 매칭 시스템
 * - 옷장에 있는 옷과 위 추천 내용과 일치하는 내용 출력
 *
 * Page Flow
 * (1) 어디를 가실 계획인가요? (위치 검색)
 * (2) 해당 위치에 대한 날씨 제공
 * (3) 날씨에 따른 색상 및 옷 정보 제공
 * **/
import Weather from "../../components/Weather";
import KakaoMap from "../../components/KakaoMap";
import TempCloth from "../../components/TempCloth";
import ColorMap from "../../components/ColorMap";
import { useState } from "react";

const MatchPage = () => {
  const [mapCoord, setMapCoord] = useState({
    // latitude: "",
    // longitude: "",
    latitude: 37.5665,
    longitude: 126.978,
  });

  const [temperature, setTemperature] = useState();

  const handleMapCoord = (lat, lng) => {
    setMapCoord({
      latitude: lat,
      longitude: lng,
    });
  };

  const handleTemperature = (temp) => {
    setTemperature(temp);
  };

  // useEffect(() => {
  //   console.log(
  //     "changed lat: " + mapCoord.latitude + " lng: " + mapCoord.longitude
  //   );
  //   // console.log("changed temp: " + temperature);
  // }, [mapCoord]);

  return (
    <section name="match" className="w-full min-h-[1000px] flex ">
      <div className="w-full h-full flex flex-col justify-center max-w-screen-lg px-4 mx-auto mt-[100px]">
        <div className="w-full h-[700px] md:h-[350px] flex flex-col md:flex-row bg-blue-800">
          <div className="w-full md:w-1/2 h-[350px] md:h-full flex bg-gray-500">
            <KakaoMap handleMapCoord={handleMapCoord} />
          </div>
          <div className="w-full md:w-1/2 h-[350px] md:h-full flex bg-orange-300">
            <Weather
              mapCoord={mapCoord}
              handleTemperature={handleTemperature}
            />
          </div>
        </div>
        <div className="w-full h-[150px]">
          <TempCloth temperature={temperature} />
        </div>
        <div className="w-full h-auto relative">
          <ColorMap />
        </div>
      </div>
    </section>
  );
};

export default MatchPage;
