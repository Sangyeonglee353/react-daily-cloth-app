/* 해당 사이트에 대한 사용법 안내 페이지 */
import aboutImg from "../../assets/images/about_bg.jpg";

const AboutPage = () => {
  return (
    <section name="about" className="w-full h-screen">
      <div className="w-full h-screen bg-slate-900/10 absolute -z-9999">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={aboutImg}
          alt="/"
        />
      </div>
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold">About this Site</h2>
          <p className="py-6 text-3xl">
            Do you spend too much time thinking about what to wear every day?{" "}
          </p>
        </div>

        <p className="mt-20 text-xl">
          Just register it in your closet. AI tells you what to wear every day I
          recommend it.
        </p>

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

export default AboutPage;
