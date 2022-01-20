import React, { useState } from "react";
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Dashboard(props) {
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const handleHide = (e) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <div>
      <Navbar 
        sidebarShow={handleShow}
      />
      <Sidebar 
        sidebarHide={handleHide} 
        value={show}
      />
      {/* <div>
        {props.child}
      </div> */}
    </div>    
  );

}