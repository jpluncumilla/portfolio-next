"use client";
import React from "react";
import "./main.css";
import About from "./about";
import Contact from "./contact";
import Work from "./work";
import { Button, Slide } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSection } from "@/redux/slices/sectionSlice";

function Main() {
  const dispatch = useDispatch();
  const { sections } = useSelector((state: RootState) => state.section);
  const componentMapping: {
    [key: string]: () => React.JSX.Element;
  } = {
    about: () => <About />,
    work: () => <Work />,
    contact: () => <Contact />,
  };
  const handleReduxClick = (section: string) => {
    dispatch(setSection(section));
  };
  return (
    <div>
      <div className='main'>
        <div className='main-logo'>
          <p className='logo'>
            <span>LUNCU</span>
            <span>MILLA</span>
            <span>.DEV</span>
          </p>
        </div>

        <div className='main-content'>
          <h1 className='main-title'>JP LUNCUMILLA</h1>
          <p className='main-subtitle'>FRONTEND SOFTWARE ENGINEER</p>
        </div>

        <div className='main-menu'>
          {Object.keys(sections).map((e, i) => (
            <a href='#'>
              <p key={e} onClick={() => handleReduxClick(e)}>
                {i + 1 + ". " + e + "."}
              </p>
            </a>
          ))}
        </div>
      </div>

      {Object.entries(sections).map(([key, value]) => {
        const Component = componentMapping[key];
        return (
          <div key={key}>
            <Slide direction='left' in={value} mountOnEnter unmountOnExit>
              <div>{Component && <Component />}</div>
            </Slide>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
