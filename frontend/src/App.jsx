import "./app.css";
import LeftBar from "./components/leftbar/Leftbar";
import TopBar from "./components/topbar/TopBar";
import Gallary from "./components/gallary/Gallary";

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallary />
      </div>
    </div>
  );
};

export default App;
