import { Outlet } from "react-router";
import LeftBar from "../../components/leftbar/Leftbar";
import TopBar from "../../components/topbar/TopBar";
import "./mainlayout.css";

const MainLayout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
