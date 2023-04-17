import "./post.scss";
import { Favorite, ModeCommentOutlined, ShareOutlined, MoreHoriz, Edit,  DeleteOutlined, ErrorOutlineOutlined, CloseOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect} from "react";
import Comments from "../comments/Comments";
import { Menu, MenuItem } from "@mui/material";
import axios from "axios";
import moment from "moment";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [postPopup, setPostPopup]= useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likers.length);
  const [isliked, setIsLiked] = useState(false);


  useEffect(()=>{
    const fetchUser = async () =>{
      const res = await axios.get( `/api/users/${post.creator}`);
      setUser(res.data)
    }
    fetchUser();
  },[post.creator] )

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const likeHandler = () => {
    setLike(isliked ? like-1 : like+1);
    setIsLiked(!isliked)
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="user">
          <img className="user__image" src={user.profilePicture || PF+"profile/hacker.png"} alt={user.fullName} />
          <div className="user__details">
            <Link to={`/profile/${post.creator}`} style={{ textDecoration: "none", color: "inherit" }}>
              <h3 className="user__name">{user.fullName}</h3>
            </Link>
            <span className="post__date">{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
        <MoreHoriz className="post__more-icon" onClick={handleMenuOpen} />
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Edit Post <Edit /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete Post <DeleteOutlined /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Report Post <ErrorOutlineOutlined /></MenuItem>
        </Menu>
        
      </div>
      <div className="post__image-container">
        <img className="post__image" src={post.picture} alt="" onClick={()=> setPostPopup(true) }/>
      </div>
      <div className="post__caption">
        <span>{post.caption}</span>
      </div>
      <div className="post__actions">
        <div className="post__actions-left">
          {isliked ? (
            <Favorite className="post__action-icon " style={{color:"red"}} onClick={likeHandler} />
           ) : (
            <FavoriteBorderIcon className="post__action-icon"  onClick={likeHandler} />
          )}
          <ModeCommentOutlined className="post__action-icon" onClick={() => setCommentOpen(!commentOpen)} />
          <ShareOutlined className="post__action-icon" />
          <span style={{paddingLeft: "130px"}}>{like} people like it</span>
        </div>
      </div>
      {postPopup &&  
      <div className="popupContainer">
        <div className="modal">
          <span className="cross" onClick={() => setPostPopup(false)}><CloseOutlined /></span>
          <div className="post__header">
        <div className="user">
          <img className="user__image" src={user.profilePicture || PF+"profile/hacker.png"} alt={user.fullName} />
          <div className="user__details">
            <Link to={`/profile/${post.creator}`} style={{ textDecoration: "none", color: "inherit" }}>
              <h3 className="user__name">{user.fullName}</h3>
            </Link>
            <span className="post__date">{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
        <MoreHoriz className="post__more-icon" onClick={handleMenuOpen} />
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Edit Post <Edit /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete Post <DeleteOutlined /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Report Post <ErrorOutlineOutlined /></MenuItem>
        </Menu>
        
      </div>
      <div className="post__image-container">
        <img className="post__image" src={post.picture} alt="" onClick={()=> setPostPopup(true) }/>
      </div>
      <Comments />
        
        </div>
      </div> }
    </div>
  );
};

export default Post;
