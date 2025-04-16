import "./leftBar.css";
import Image from "../image/Image";

const LeftBar = () => {
  return (
    <>
      <div className="leftBar">
        <div className="menuIcons">
          <a href="/" className="menuIcon">
            <Image
              path="/general/pinterest-logo.svg"
              alt="logo"
              className="logo"
            />
          </a>
          <a href="/" className="menuIcon">
            <Image path="/general/home.svg" alt="home" />
          </a>
          <a href="/" className="menuIcon">
            <Image path="/general/create.svg" alt="create" />
          </a>
          <a href="/" className="menuIcon">
            <Image path="/general/updates.svg" alt="update" />
          </a>
          <a href="/" className="menuIcon">
            <Image path="/general/messages.svg" alt="message" />
          </a>
        </div>
        <a href="/" className="menuIcon">
          <Image path="/general/settings.svg" alt="settings" />
        </a>
      </div>
    </>
  );
};

export default LeftBar;
