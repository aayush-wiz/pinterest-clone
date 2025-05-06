import "./leftBar.css";
import Image from "../image/Image";
import { Link } from "react-router";

const LeftBar = () => {
  return (
    <>
      <div className="leftBar">
        <div className="menuIcons">
          <Link to="/" className="menuIcon">
            <Image
              path="/general/pinterest-logo.svg"
              alt="logo"
              className="logo"
            />
          </Link>
          <Link to="/" className="menuIcon">
            <Image path="/general/home.svg" alt="home" />
          </Link>
          <Link to="/create" className="menuIcon">
            <Image path="/general/create.svg" alt="create" />
          </Link>
          <Link to="/" className="menuIcon">
            <Image path="/general/updates.svg" alt="update" />
          </Link>
          <Link to="/" className="menuIcon">
            <Image path="/general/messages.svg" alt="message" />
          </Link>
        </div>
        <Link to="/" className="menuIcon">
          <Image path="/general/settings.svg" alt="settings" />
        </Link>
      </div>
    </>
  );
};

export default LeftBar;
