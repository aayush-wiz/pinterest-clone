import UserButton from "../userButton/UserButton";
import "./topBar.css";

const TopBar = () => {
  return (
    <>
      <div className="topBar">
        {/* SEARCH */}
        <div className="search">
          <img src="/general/search.svg" alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
        {/* USER */}
        <UserButton />
      </div>
    </>
  );
};

export default TopBar;
