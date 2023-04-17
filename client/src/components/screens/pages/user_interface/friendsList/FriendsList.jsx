import { DeleteOutlined, Edit, ErrorOutlineOutlined, MoreHoriz, Redeem } from '@mui/icons-material';
import './friendsList.scss';
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";


export default function FriendsList() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
      setMenuOpen(true);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      setMenuOpen(false);
    };
  return (
    <div className="list">
        <div className="friend">
            <div className="left">
                <img src="/assets/person/photo3.jpg" alt=""/>
                <span>Chtourou Eya</span>
            </div>
            <div className="right">
            <button className="btn">View list <Redeem /> </button>
            <MoreHoriz className="post__more-icon" onClick={handleMenuOpen} />
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Edit Post <Edit /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete Post <DeleteOutlined /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Report Post <ErrorOutlineOutlined /></MenuItem>
        </Menu>
            </div>
        </div>
        <div className="friend">
            <div className="left">
                <img src="/assets/person/photo3.jpg" alt=""/>
                <span>Chtourou Eya</span>
            </div>
            <div className="right">
            <button className="btn">View list <Redeem /> </button>
            <MoreHoriz className="post__more-icon" onClick={handleMenuOpen} />
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Edit Post <Edit /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete Post <DeleteOutlined /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Report Post <ErrorOutlineOutlined /></MenuItem>
        </Menu>
            </div>
        </div>
        <div className="friend">
            <div className="left">
                <img src="/assets/person/photo3.jpg" alt=""/>
                <span>Chtourou Eya</span>
            </div>
            <div className="right">
            <button className="btn">View list <Redeem /> </button>
            <MoreHoriz className="post__more-icon" onClick={handleMenuOpen} />
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Edit Post <Edit /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete Post <DeleteOutlined /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Report Post <ErrorOutlineOutlined /></MenuItem>
        </Menu>
            </div>
        </div>
        <div className="friend">
            <div className="left">
                <img src="/assets/person/photo3.jpg" alt=""/>
                <span>Chtourou Eya</span>
            </div>
            <div className="right">
            <button className="btn">View list <Redeem /> </button>
            <MoreHoriz className="post__more-icon" onClick={handleMenuOpen} />
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Edit Post <Edit /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete Post <DeleteOutlined /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Report Post <ErrorOutlineOutlined /></MenuItem>
        </Menu>
            </div>
        </div>
        <div className="friend">
            <div className="left">
                <img src="/assets/person/photo3.jpg" alt=""/>
                <span>Chtourou Eya</span>
            </div>
            <div className="right">
            <button className="btn">View list <Redeem /> </button>
            <MoreHoriz className="post__more-icon" onClick={handleMenuOpen} />
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Edit Post <Edit /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete Post <DeleteOutlined /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Report Post <ErrorOutlineOutlined /></MenuItem>
        </Menu>
            </div>
        </div>
        <div className="friend">
            <div className="left">
                <img src="/assets/person/photo3.jpg" alt=""/>
                <span>Chtourou Eya</span>
            </div>
            <div className="right">
            <button className="btn">View list <Redeem /> </button>
            <MoreHoriz className="post__more-icon" onClick={handleMenuOpen} />
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Edit Post <Edit /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete Post <DeleteOutlined /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Report Post <ErrorOutlineOutlined /></MenuItem>
        </Menu>
            </div>
        </div>
        <div className="friend">
            <div className="left">
                <img src="/assets/person/photo3.jpg" alt=""/>
                <span>Chtourou Eya</span>
            </div>
            <div className="right">
            <button className="btn">View list <Redeem /> </button>
            <MoreHoriz className="post__more-icon" onClick={handleMenuOpen} />
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Edit Post <Edit /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete Post <DeleteOutlined /></MenuItem>
          <MenuItem onClick={handleMenuClose}>Report Post <ErrorOutlineOutlined /></MenuItem>
        </Menu>
            </div>
        </div>
    </div>
  )
}
