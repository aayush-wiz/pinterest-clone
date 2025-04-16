import UserButton from "../userButton/UserButton";
import Image from "../image/Image";
import "./topBar.css";

const TopBar = () => {
  return (
    <>
      <div className="topBar">
        {/* SEARCH */}
        <div className="search">
          <Image path="/general/search.svg" alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
        {/* USER */}
        <UserButton />
      </div>
    </>
  );
};

export default TopBar;
