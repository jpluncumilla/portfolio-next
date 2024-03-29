import React from "react";
import { useDispatch } from "react-redux";
import { resetSections } from "@/redux/slices/sectionSlice";
import { Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

function About() {
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
          <span>.DEV</span>
        </p>
        <WestIcon onClick={handleReset}>{/* <ClearIcon /> */}</WestIcon>
      </div>

      <div className='about-content'>
        <h1 className='title'>ABOUT.</h1>
        <p>
          I&apos;m a Miami,FL based Frontend Engineer with 4+ years in the
          field. Throughout my career, I have been dedicated to assisting
          Marketing Agencies, product startups, and Department of Defense
          agencies in enhancing their products through innovative
          Javascript-based solutions.
        </p>
        <br></br>
        <p>
          My expertise lies in the creation of refined digital web experiences.
          I am committed to producing clean, efficient, and scalable code, all
          while ensuring optimal functionality through rigorous software
          testing.
        </p>
        <br></br>
        <p>
          Let&apos;s collaborate to elevate digital experiences to new heights.
        </p>
      </div>
    </div>
  );
}

export default About;
