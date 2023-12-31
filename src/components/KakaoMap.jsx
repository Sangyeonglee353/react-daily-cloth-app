/* 카카오맵 호출 페이지 */
/* [버전 1]_JS만을 사용한
 * 주요 기능
 * [구현]
 * 카카오 API를 이용하여 지도 출력
 * 중심 위도와 경도 표시하기
 * 드래그 이동 후 마커 표시하기
 * 현재 위치의 마커 표시하기
 * 클릭한 위치의 마커 표시하기 + 주소 표시하기
 * 주소 검색 + 이동 기능 -> 검색은 맵 표시 함수와 분리해서 작성해야 함.
 * [구현전]
 * 위도, 경도 useState 변수 통합
 * [버전 UP]
 * react-kakako-map-sdk 사용
 * 참고 사항
 * index.html에서 kakao api를 호출할 때는 상관 없으나, 해당 파일에서 kakao api호출 시에는 autoload=false 옵션을 추가해주어야 한다.
 * 🎇 Function, 🚀 Running function, 💫 Event, 📌 Define
 */
import { useEffect, useState } from "react";
import Script from "react-load-script";
import config from "../api/apikey";

const KakaoMap = ({ handleMapCoord }) => {
  const KAKAO_API_KEY = config.KAKAO_API_KEY;
  const [coord, setCoord] = useState({
    latitude: 37.5665,
    longitude: 126.978,
  });
  const [searchText, setSearchText] = useState(""); // 검색어

  // 카카오 맵 관련 변수 선언
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [infowindow, setInfowindow] = useState(null);

  // [함수 선언] 상위 컴포넌트에 경도와 위도값 전달
  const changeMapCoord = (lat, lng) => {
    handleMapCoord(lat, lng);
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    if (searchText.length > 0) {
      // 검색 실행
      let geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(searchText, (result, status) => {
        if (
          status === window.kakao.maps.services.Status.OK &&
          result.length > 0
        ) {
          // 주소 검색 결과가 있으면 처리(검색 결과가 다수이므로 첫번째 값으로 설정)
          const firstResult = result[0];
          const latLng = new window.kakao.maps.LatLng(
            firstResult.y,
            firstResult.x
          );

          console.log("검색 결과: ", latLng.getLat(), latLng.getLng());

          // 검색 결과를 화면에 표시
          // 1. 검색 결과 중심 위치 이동
          displaySearchAddress(latLng, firstResult);

          // 2. 검색 결과를 화면에 마커로 표시
          searchDetailAddrFromCoords(latLng, (result, status) =>
            displayAddress(latLng, result, status)
          );
        } else {
          alert("주소를 찾을 수 없습니다.");
        }
      });
    } else {
      alert("검색할 주소를 입력해주세요!");
    }
  };

  // 🎇 검색 결과를 지도에 표시하는 함수
  const displaySearchAddress = (latLng, result) => {
    // 결과 좌표를 중심으로 지도 이동
    map.setCenter(latLng);
  };

  // 🎇 Present marker function in the map
  const presentMarker = (latitude, longitude) => {
    // 1. set marker position
    let position = new window.kakao.maps.LatLng(latitude, longitude);
    // 2. create a marker
    //   let marker = new window.kakao.maps.Marker({
    //     position: position,
    //   });
    // 2. set position of marker
    marker.setPosition(position);

    // 3. create a maker in the map
    marker.setMap(map);
  };

  // 🎇 행정동 주소 요청 함수
  const searchAddrFromCoords = (coords, callback) => {
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  };

  // 🎇 법정동 주소 요청 함수
  const searchDetailAddrFromCoords = (coords, callback) => {
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  };

  // 🎇 지도 좌측 상단에 지도 중심 좌표에 대한 주소 정보 출력 함수
  const displayCenterInfo = (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      let infoDiv = document.getElementById("centerAddr");

      for (let i = 0; i < result.length; i++) {
        // 행정동의 region_type = 'H'
        if (result[i].region_type === "H") {
          infoDiv.innerHTML = result[i].address_name;
          break;
        }
      }
    }
  };

  // 🎇 주소 표시 함수
  const displayAddress = (coords, result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      let detailAddr = !!result[0].road_address
        ? "<div>도로명주소: " + result[0].road_address.address_name + "</div>"
        : "";
      detailAddr +=
        "<div>지번 주소: " + result[0].address.address_name + "</div>";

      let content =
        '<div style="padding: 5px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">' +
        '<span style="display: block; font-weight: bold;">법정동 주소정보</span>' +
        detailAddr +
        "</div>";

      // 🚀 Dynamic present marker in the map
      presentMarker(coords.getLat(), coords.getLng());

      // 💫 Save latitude and longitude in the state
      setCoord({
        latitude: coords.getLat(),
        longitude: coords.getLng(),
      });

      // 💫 Present address info
      infowindow.setContent(content);
      infowindow.open(map, marker);
    }
  };

  const handleEvent = () => {
    if (map) {
      // 💫 Present address at map left-top, after search current center of map coordinates.
      window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
        searchDetailAddrFromCoords(mouseEvent.latLng, (result, status) =>
          displayAddress(mouseEvent.latLng, result, status)
        );
      });

      // 💫 Present address info when changed center position & zoom size
      window.kakao.maps.event.addListener(map, "idle", () => {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);
      });
      // 🚀 Static present marker in the map
      presentMarker(37.5665, 126.978);
    }
  };

  // 🎇 카카오맵 표시 함수
  const getKakaoMapData = () => {
    try {
      // Kakao 지도 API 초기화
      //   const script = document.createElement("script");
      //   script.async = true;
      //   script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}`;
      //   document.head.appendChild(script);

      //   script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("kakao-map");
        const options = {
          // center: new window.kakao.maps.LatLng(37.5665, 126.978), // 좌표 설정
          center: new window.kakao.maps.LatLng(coord.latitude, coord.longitude), // 좌표 설정
          level: 3, // 확대 수준 설정
        };
        // 💫 Create Map
        // const map = new window.kakao.maps.Map(container, options);
        // map = new window.kakao.maps.Map(container, options);
        // setMap(new window.kakao.maps.Map(container, options));
        const newMap = new window.kakao.maps.Map(container, options);
        setMap(newMap);

        console.log("map in getkakaodataMap:", map);

        // 📌 Create Address to Coordinates object
        // [Condition]
        // Must need to property 'libraries=services' in kakao api url.
        const newGeocoder = new window.kakao.maps.services.Geocoder();
        setGeocoder(newGeocoder);

        // 📌 Define marker & infowindow
        const newMarker = new window.kakao.maps.Marker();
        setMarker(newMarker);
        const newInfowindow = new window.kakao.maps.InfoWindow({ zindex: 1 });
        setInfowindow(newInfowindow);

        // 💫 Get map coordinate info
        // [1] center_changed: 중심 좌표가 변경된 경우
        // [2] dragend: 드래그가 끝난 경우
        // window.kakao.maps.event.addListener(map, "dragend", () => {
        //   let center = map.getCenter();
        //   setLatitude(center.getLat());
        //   setLongitude(center.getLng());

        //   // 🚀 Dynamic present marker in the map
        //   presentMarker(center.getLat(), center.getLng());
        // });

        // [3] click: 마우스를 클릭한 경우
        // window.kakao.maps.event.addListener(map, "click", (mouseEvent) => {
        //   // Get & save Clicked latitude and longitude
        //   let latlng = mouseEvent.latLng;
        //   setLatitude(latlng.getLat());
        //   setLongitude(latlng.getLng());

        //   // 🚀 Dynamic present marker in the map
        //   presentMarker(latlng.getLat(), latlng.getLng());
        // });
      });
      //   };

      return () => {
        // 컴포넌트 언마운트 시 스크립트 제거
        // document.head.removeChild(script);
      };
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getKakaoMapData();
  }, []);

  useEffect(() => {
    handleEvent();
  }, [map]);

  // [함수 실행] 상위 컴포넌트에 경도와 위도값 전달
  useEffect(() => {
    changeMapCoord(coord.latitude, coord.longitude);
  }, [coord]);

  return (
    <section name="kakaomap" className="w-full flex relative">
      {/* 콘텐츠 */}
      <Script
        url={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false&libraries=services`}
        onLoad={getKakaoMapData}
      />
      <div className="w-full h-full flex flex-col m-auto relative">
        <div id="kakao-map" className="w-full h-[30vh] z-[1]"></div>
        <div className="absolute left-5 top-5 border rounded-[2px] bg-white bg-opacity-80 z-[2] p-5">
          <span className="block font-bold">지도중심기준 행정동 주소정보</span>
          <span id="centerAddr"></span>
        </div>
        <div className="relative w-full h-8 bg-white bg-opacity-80">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchText}
            className="h-full px-2"
            placeholder="Search..."
          />
          <button
            className="ml-2 px-2 text-white border bg-slate-600 border-slate-600 hover:bg-transparent hover:text-slate-600 rounded-md"
            onClick={handleSearch}
          >
            검색
          </button>
          <span className="absolute font-bold right-2 leading-8">
            {coord.latitude &&
              `위도: ${coord.latitude.toFixed(
                4
              )}, 경도: ${coord.longitude.toFixed(4)}`}
            {/* 소수점 4째자리까지 */}
          </span>
        </div>
      </div>
    </section>
  );
};

export default KakaoMap;
