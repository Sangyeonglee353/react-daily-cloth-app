import Navbar from "./components/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ClosetPage from "./pages/ClosetPage";
import DailyLookPage from "./pages/DailyLookPage";
import MatchPage from "./pages/MatchPage";
import AboutPage from "./pages/AboutPage";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route payh="/" element={<Layout />}>
          {/* <Route index element={<LoginPage />} /> */}
          <Route index element={<HomePage />} /> {/*} 임시 작업용 전환*/}
          <Route path="about" element={<AboutPage />} />
          <Route path="match" element={<MatchPage />} />
          <Route path="daily" element={<DailyLookPage />} />
          <Route path="closet" element={<ClosetPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
