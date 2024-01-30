import React from "react";
import { useDispatch } from "react-redux";
import { resetSections } from "@/redux/slices/sectionSlice";
import { Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

function work() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetSections());
  };
  return (
    <div className='about'>
      <div className='top-menu'>
        <p className='logo'>
          <span>LUNCU</span>
          <span>MILLA</span>
          <span>.IO</span>
        </p>
        <WestIcon onClick={handleReset}>{/* <ClearIcon /> */}</WestIcon>
      </div>

      <div className='about-content'>
        <h1 className='title'>WORK.</h1>
        <p>CONTENT GOES HERE</p>
      </div>
    </div>
  );
}

export default work;
