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
 *
 * Page Flow
 * (1) 어디를 가실 계획인가요? (위치 검색)
 * (2) 해당 위치에 대한 날씨 제공
 * (3) 날씨에 따른 색상 및 옷 정보 제공
 * **/
import Weather from "../../components/Weather";
import KakaoMap from "../../components/KakaoMap";

const MatchPage = () => {
  return (
    <section name="match" className="w-full h-screen flex">
      <div className="w-full h-full flex flex-col justify-center max-w-screen-lg p-4 mx-auto">
        <div className="w-full h-[30vh] flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-full flex bg-gray-500">
            {/* <KakaoMap /> */}
            <span className="w-full flex justify-center items-center text-2xl">
              KakaoMap
            </span>
          </div>
          <div className="w-full md:w-1/2 h-full flex bg-orange-300">
            {/* <Weather /> */}
            <span className="w-full flex justify-center items-center text-2xl">
              Weather
            </span>
          </div>
        </div>
        <div className="w-full h-[10vh] bg-lime-400">Today Color</div>
        <div className="w-full h-[40vh] bg-red-400">Today cloth Pick</div>
      </div>
    </section>
  );
};

export default MatchPage;
