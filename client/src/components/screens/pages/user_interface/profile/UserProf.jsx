import "./profile.scss";
import Posts from "../../../components/posts/Posts"
import { useState, useEffect } from 'react';
import { Menu, MenuItem } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState({});
  const [error,setError] = useState();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUserInfo();
  }, [userId]);
  

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  return error ? (
    <span className="error-message">{error}</span>
    ) : (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <button>Follow</button>
          </div>
          <div className="center">
            <span>{user.fullName}</span>
          </div>
          <div className="right">
            <MoreHoriz className="dropdown-icon" onClick={handleMenuOpen} />
            <Menu
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              className="dropdown-menu"
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/newpost" className="dropdown-link">
                  New Post
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/editprofile" className="dropdown-link">
                  Edit Profile
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <Posts userId={user._id}/>
      </div>
    </div>
  );
};

export default Profile;
