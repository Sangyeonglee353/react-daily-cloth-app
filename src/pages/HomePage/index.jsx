import apple from "../../assets/images/apple.svg";
import google from "../../assets/images/google.svg";

/* 기본 소개 페이지 */

const HomePage = () => {
  return (
    <section name="home" className="flex w-full h-screen bg-zinc-200">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center w-full px-2 py-8 md:items-start">
          <p className="text-2xl">Use our recommend platform.</p>
          <h1 className="py-3 text-5xl font-bold md:text-7xl">
            Recommend Daily Cloth
          </h1>
          <p className="text-2xl">RDC is the best recommend platform</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>

        <div className="flex flex-col justify-center px-2">
          <h2 className="font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
            Easily download app <br className="hidden sm:block" />
            Google & Apple
          </h2>
          <p className={`text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
            Adipisicing et sit ut ad. Mollit reprehenderit nostrud eiusmod irure
            culpa. Non eu sit ut excepteur consequat occaecat minim minim
            nostrud dolore. Nulla id nulla eu in eu adipisicing voluptate velit
            voluptate ad labore proident officia tempor.
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
