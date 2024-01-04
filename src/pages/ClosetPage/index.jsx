/* 현재 내가 보유하고 있는 옷장 페이지
 *
 * [참고사항]
 * - imageListGruop: 전체 옷 경로 배열
 * - imageList: 특정 종류 옷 경로 배열
 * - image: 해당 옷 배열
 */

import ClosetImages from "../../api/ClosetImages";
import ClosetButton from "../../components/ClosetButton";
import ClosetItem from "../../components/ClosetItem";
import ClosetItemList from "../../components/ClosetItemList";
import { getImages } from "../../api/requests";
import { useEffect, useState } from "react";

const ClosetPage = () => {
  const menuList = [
    "All",
    "Top",
    "Pants",
    "Outer",
    "Shoes",
    "Sneakers",
    "Bag",
    "Headwear",
  ];

  const [imageListGroup, setImageListGroup] = useState([]);

  const [menuStatus, setMenuStatus] = useState({
    status0: true, // all
    status1: true, // top
    status2: true, // pants
    status3: true, // outer
    status4: true, // shoes
    status5: true, // sneakers
    status6: true, // bag
    status7: true, // headwear
  });

  const handleAllMenuStatus = (status) => {
    setMenuStatus((prevMenuStatus) => ({
      status0: status, // all
      status1: status, // top
      status2: status, // pants
      status3: status, // outer
      status4: status, // shoes
      status5: status, // sneakers
      status6: status, // bag
      status7: status, // headwear
    }));
  };

  const handleMenuStatus = (status) => {
    setMenuStatus((prevMenuStatus) => {
      const updatedMenuStatus = {};
      // 전체 조건에 해당하는 조건 추가
      if (prevMenuStatus["status0"] === true) {
        for (const key in prevMenuStatus) {
          updatedMenuStatus[key] = key === status ? true : false;
        }
      } else {
        for (const key in prevMenuStatus) {
          updatedMenuStatus[key] =
            key === status ? !prevMenuStatus[key] : false;
        }
      }
      return updatedMenuStatus;
    });
  };

  useEffect(() => {
    // const data = GetImages("../assets/images/closet/top");
    const data = getImages("top"); // 수정 필요
    setImageListGroup(data);
  }, [menuStatus]);

  return (
    <section name="closet" className="w-full min-h-[1000px] flex ">
      <div className="w-full h-full flex flex-col justify-center max-w-screen-lg px-4 mx-auto mt-[100px]">
        <div className="w-full max-h-[1000px] flex flex-col">
          {/* <div className="w-full h-[80px] flex items-center border border-solid border-black rounded-t-2xl"> */}
          <div className="w-full h-[80px] flex items-center">
            {/* 메뉴 Area */}
            <ul className="w-full flex justify-around">
              {menuList.map((menuItem, index) => (
                <ClosetButton
                  key={index}
                  index={index}
                  name={menuItem}
                  status={menuStatus["status" + index]}
                  handleStatus={
                    index === 0 ? handleAllMenuStatus : handleMenuStatus
                  }
                />
              ))}
            </ul>
          </div>
          <div className="w-full h-full flex overflow-auto p-4">
            {/* 옷 나열 리스트 Area*/}
            {/* <ul className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid=cols-3 lg:grid-cols-5 justify-items-center"> */}
            <ul className="w-full grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 justify-items-center">
              {console.log("menuStatus: ", menuStatus)}
              {imageListGroup.length !== 0 &&
                imageListGroup.map(
                  (_, idx) =>
                    menuStatus["status" + (idx + 1)] && (
                      <ClosetItemList
                        key={idx}
                        imageList={imageListGroup[`${idx}`]}
                        menu={menuList[`${idx + 1}`].toLowerCase()}
                      />
                    )
                )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosetPage;
