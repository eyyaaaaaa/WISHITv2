import "./topbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext,useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { CloseOutlined, GroupAddOutlined, Tune } from "@mui/icons-material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";


const Topbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [showSearch, setShowSearch] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchCloseClick = () => {
    setShowSearch(false);
  };

  return (
    <div className="navbar">

        <Link className="logo" to="/" style={{ textDecoration: "none" }}>
          <span>W<span className="wlogo">ishit</span></span>
        </Link>
       <div className="middle">
      <div className="left">
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search here" />
        </div>
        <button className="btn"><p>Filter</p><Tune className="tune" /></button>
      </div>
      </div>
      <div className="right">
      {/*<div className="search">
          <SearchOutlinedIcon onClick={handleSearchClick}/>
        </div>*/}
      <NotificationsOutlinedIcon />
      <GroupAddOutlined className="groupadd"/>
        <div className="user">
          <img
            src={"/assets/person/photo3.jpg" ||  (PF + "profile/hacker.png")}
            alt=""
          />
          <span>Samar Dakhlaoui</span>
        </div>
      </div>
      {showSearch && (
        <div className="search-container">
          <input type="text" placeholder="Rechercher..." />
          <button className="search-close" onClick={handleSearchCloseClick}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Topbar;