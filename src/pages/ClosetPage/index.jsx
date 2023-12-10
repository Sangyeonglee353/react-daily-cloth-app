/* 현재 내가 보유하고 있는 옷장 페이지 */
import ClosetButton from "../../components/ClosetButton";
import ClosetItem from "../../components/ClosetItem";

const ClosetPage = () => {
  return (
    <section name="closet" className="w-full min-h-[1000px] flex ">
      <div className="w-full h-full flex flex-col justify-center max-w-screen-lg px-4 mx-auto mt-[100px]">
        <div className="w-full max-h-[1000px] flex flex-col bg-blue-800">
          <div className="w-full h-[80px] flex items-center bg-green-500">
            {/* 메뉴 Area */}
            <ul className="w-full flex justify-around">
              <ClosetButton />
              <ClosetButton />
              <ClosetButton />
              <ClosetButton />
              <ClosetButton />
              <ClosetButton />
              <ClosetButton />
            </ul>
          </div>
          <div className="w-full h-[1000px] flex bg-orange-300">
            {/* 옷 나열 리스트 Area */}
            <ul className="w-full h-auto flex flex-wrap justify-around items-center">
              <ClosetItem />
              <ClosetItem />
              <ClosetItem />
              <ClosetItem />
              <ClosetItem />
              <ClosetItem />
              <ClosetItem />
              <ClosetItem />
              <ClosetItem />
              <ClosetItem />
              <ClosetItem />
              <ClosetItem />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosetPage;
