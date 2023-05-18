import { useDispatch, useSelector } from "react-redux";
import { getSelfGiftlist } from "../../../../../actions/giftlist.actions";
import "./userwishlist.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from "react";
import beach from "../../../../../themes/beach.jpg";
import dogs from "../../../../../themes/dogs.jpg";
import flower from "../../../../../themes/flower.jpg";
import friends from "../../../../../themes/friends.jpg";
import leaf from "../../../../../themes/leaf.jpg";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Wishlist({userId}) {
    const user = useSelector((state)=> state.userReducer);
    const giftList = useSelector((state) => state.giftlistReducer);
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch= useDispatch()
    useEffect(() => {
      dispatch(getSelfGiftlist(user._id));
      }, [userId, user._id, dispatch]);

      const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuOpen(false);
      };
      const handleSendAsMessage = ()=>{

      };

      const previewImage =
      giftList.theme === "beach"
        ? beach
        : giftList.theme === "dogs"
        ? dogs
        : giftList.theme === "flower"
        ? flower
        : giftList.theme === "friends"
        ? friends
        : leaf;

  return (
    <div className="big-container">
    <div className="wishlist-container"  style={{ backgroundImage: `url(${previewImage})`, backgroundSize:"100% 100%" }}>
        {giftList.length > 0 ? ( // Add this condition
      <div className="wishlist-content">
        <div className="event-type">
          <p>{giftList[0].category}</p>
          <MoreVertIcon className="dropdown-icon" onClick={handleMenuOpen} />
            <Menu
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              className="dropdown-menu"
            >
              <MenuItem onClick={handleMenuClose}>
                <span onClick={handleSendAsMessage}> Send as message</span>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="../settings" className="dropdown-link">
                  Edit Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/wishlist" className="dropdown-link">
                  View Wishlist
                </Link>
              </MenuItem>
            </Menu>
        </div>
        <div className="gifts">
          {giftList[0].gifts.map((gift, index) => (
            <div key={index} className="gift">
              <div className='name-container' style={{display:"flex",justifyContent: "space-between"}}>
                <p >Gift: {gift.name}</p>
                <FavoriteBorderIcon/>
              </div>
              <div className='desc-container' style={{display:"flex",justifyContent: "space-between"}}>
                <p >Description: {gift.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        ): (<p>Loading...</p> ) }
    </div>
    </div>
  );
}
