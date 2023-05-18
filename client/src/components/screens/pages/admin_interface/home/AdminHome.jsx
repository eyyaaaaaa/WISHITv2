import React from 'react';
import "./home.scss"
import PostsDiagram from './PostsDiagram';
import UsersDiagram from './UsersDiagram';
const AdminHome = () => {
  return (
    <div className='flex-container'> 
       <div className="flex-item-users"><UsersDiagram/></div>
        <div className="flex-item-posts"><PostsDiagram/></div>
        <div className="flex-item-other"><PostsDiagram/></div>
    </div>
  );
};

export default AdminHome;
