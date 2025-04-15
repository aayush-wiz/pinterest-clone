import "./leftBar.css";

const LeftBar = () => {
  return (
    <>
      <div className="leftBar">
        <div className="menuIcons">
          <a href="/" className="menuIcon">
            <img src="/general/pinterest-logo.svg" alt="logo" className="logo" />
          </a>
          <a href="/" className="menuIcon">
            <img src="/general/home.svg" alt="home" />
          </a>
          <a href="/" className="menuIcon">
            <img src="/general/create.svg" alt="create" />
          </a>
          <a href="/" className="menuIcon">
            <img src="/general/updates.svg" alt="update" />
          </a>
          <a href="/" className="menuIcon">
            <img src="/general/messages.svg" alt="message" />
          </a>
        </div>
        <a href="/" className="menuIcon">
          <img src="/general/settings.svg" alt="settings" />
        </a>
      </div>
    </>
  );
};

export default LeftBar;
