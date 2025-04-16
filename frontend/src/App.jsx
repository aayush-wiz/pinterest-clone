import "./app.css";
import LeftBar from "./components/leftbar/Leftbar";
import TopBar from "./components/topbar/TopBar";
import Gallery from "./components/gallery/Gallery";

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
