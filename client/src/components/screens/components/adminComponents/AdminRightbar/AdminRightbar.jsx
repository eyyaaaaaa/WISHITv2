import React from 'react';
import "./adminRightbar.scss"
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bazYatir from "../figures/baz yatir.png"
import goal from "../figures/goal.png"
import celebration from "../figures/celebration.png"
const AdminRightbar = () => {
  const location = useLocation();
  const users = useSelector((state)=> state.usersReducer);
  const posts = useSelector((state)=> state.postReducer);
  let view;
  let verifiedAccounts=0;
users.map((user)=>{
    if (user.followers.length>=0){
      verifiedAccounts++;
    }
  })

  if (location.pathname === '/') {
    view = <div className='rectangles-container'>
      <div className="rectangle" style={{background:"#FFA2B5"}}>
        <div className="stat">
          <h4>Registred users</h4>
          <span className='number'>{users.length}</span>
        </div>
        <div className="model" style={{position:"absolute", right: "-10px", top: "50px"}}>
          <img src={bazYatir} alt="Baz Yatir" />
        </div>
      </div>
      <div className="rectangle" style={{background:"#45F6D4"}}>
        <div className="stat">
          <h4>Total Posts</h4>
          <span className='number'>{posts.length}</span>
        </div>
        <div className="model" style={{position:"absolute", right: "-10px"}}>
          <img src={goal} alt="goal" style={{ width:"145px"}} />
        </div>
      </div>
      <div className="rectangle" style={{background:"#FAD85D"}}>
        <div className="stat">
          <h4>Verified accounts</h4>
          <span className='number'>{verifiedAccounts}</span>
        </div>
        <div className="model" style={{position:"absolute", right: "-14px"}}>
          <img src={celebration} alt="celebration" style={{ width:"165px"}} />
        </div>
      </div>
    </div>;
  } else if (location.pathname === '/content') {
    view = <div>Content Page Content</div>;
  } else if (location.pathname === '/users') {
    view = <div>Users Page Content</div>;
  } else {
    view = <div>Page Not Found</div>;
  }
  return (
    <div className='right-bar-container'>
      <h3 className='rightbar-title' > Summary </h3>
      {view}
    </div>
  );
};

export default AdminRightbar;
