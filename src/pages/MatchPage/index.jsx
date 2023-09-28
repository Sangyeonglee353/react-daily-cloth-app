/* 날씨에 맞는 옷 추천 페이지 */
/** 세부 기능
 * 1. 날씨 표시
 * - 지역 선택(Kakao map 연결 & 위도 경도 정보 가져오기)
 * - 날씨 가져오기(위도, 경도와 날씨 API의 위도, 경도값 매칭)
 * - 날씨 표시하기
 * 2. 날씨별 추천 시스템
 * - 색상
 * - 옷 유형
 * 3. 옷장 매칭 시스템
 * - 옷장에 있는 옷과 위 추천 내용과 일치하는 내용 출력
 * **/

const MatchPage = () => {
  return (
    <section name="match" className="w-full h-screen">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Weather Info</h2>
          <p className="py-6 text-3xl">
            Do you spend too much time thinking about what to wear every day?{" "}
          </p>
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
