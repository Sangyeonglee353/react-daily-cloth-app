import apple from "../../assets/images/apple.svg";
import google from "../../assets/images/google.svg";
import homeImg from "../../assets/images/home_bg.jpg";
import { Link } from "react-router-dom";
/* 기본 소개 페이지 */

const HomePage = () => {
  return (
    <section name="home" className="flex w-full h-screen bg-zinc-200">
      <div className="w-full h-screen bg-slate-900/10 absolute -z-9999">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={homeImg}
          alt="/"
        />
      </div>
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto bg-gray-300/10 px-10 py-5 rounded-xl text-black z-10">
        <div className="flex flex-col justify-center w-full px-2 py-8 md:items-start">
          <p className="text-2xl">Use our recommend platform.</p>
          <h1 className="py-3 text-5xl font-bold md:text-7xl">
            Recommend Daily Cloth
          </h1>
          <p className="text-2xl">Alook is the best recommend platform</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">
            <Link to="match">Get Started</Link>
          </button>
        </div>

        <div className="flex flex-col justify-center px-2">
          <h2 className="font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
            Easily download app <br className="hidden sm:block" />
            Google & Apple
          </h2>
          <p className={`text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
            Just register it in your closet. AI tells you what to wear every day
            I recommend it. We help you use your precious 24 hours more
            efficiently
          </p>
          <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
            <img
              src={apple}
              alt="appy_store"
              className="w-[128.86px] h-[42.08px] object-contain mr-5 cursor-pointer"
            ></img>
            <img
              src={google}
              alt="google_play"
              className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
