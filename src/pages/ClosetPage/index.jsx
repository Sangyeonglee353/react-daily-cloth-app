/* 현재 내가 보유하고 있는 옷장 페이지 */
import ClosetImages from "../../api/ClosetImages";
import ClosetButton from "../../components/ClosetButton";
import ClosetItem from "../../components/ClosetItem";
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

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const data = getImages("../assets/images/closet/top");
    setImageList(data);
  }, []);

  return (
    <section name="closet" className="w-full min-h-[1000px] flex ">
      <div className="w-full h-full flex flex-col justify-center max-w-screen-lg px-4 mx-auto mt-[100px]">
        <div className="w-full max-h-[1000px] flex flex-col">
          <div className="w-full h-[80px] flex items-center border border-solid border-black rounded-t-2xl">
            {/* 메뉴 Area */}
            <ul className="w-full flex justify-around">
              {menuList.map((menuItem, index) => (
                <ClosetButton key={index} name={menuItem} />
              ))}
            </ul>
          </div>
          <div className="w-full h-full flex bg-orange-300 overflow-auto">
            {/* 옷 나열 리스트 Area */}
            {/* <ul className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid=cols-3 lg:grid-cols-5 justify-items-center">
              {Array(12)
                .fill()
                .map((_, index) => (
                  <ClosetItem key={index} />
                ))}
            </ul> */}
            <ul className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid=cols-3 lg:grid-cols-5 justify-items-center">
              {console.log("imageList: ", imageList)}
              {imageList.length != 0 &&
                imageList.map((image, index) => (
                  <ClosetItem key={index} image={image} />
                ))}
            </ul>
            {/* <ClosetImages /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosetPage;
