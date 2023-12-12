/* 현재 내가 보유하고 있는 옷장 페이지 */
import ClosetButton from "../../components/ClosetButton";
import ClosetItem from "../../components/ClosetItem";

const ClosetPage = () => {
  const menuList = [
    "TOP",
    "Pants",
    "Outer",
    "Shoes",
    "Sneakers",
    "Bag",
    "Headwear",
  ];
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
              {/* <ClosetButton name={menuList[0]} />
              <ClosetButton name={menuList[1]} />
              <ClosetButton name={menuList[2]} />
              <ClosetButton name={menuList[3]} />
              <ClosetButton name={menuList[0]} />
              <ClosetButton name={menuList[0]} />
              <ClosetButton name={menuList[0]} /> */}
            </ul>
          </div>
          <div className="w-full h-[1000px] flex bg-orange-300">
            {/* 옷 나열 리스트 Area */}
            <ul className="w-full h-auto flex flex-wrap justify-around items-center">
              {Array(12)
                .fill()
                .map((_, index) => (
                  <ClosetItem key={index} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosetPage;
