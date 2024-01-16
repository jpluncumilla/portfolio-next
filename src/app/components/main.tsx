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
        <h1>JP Luncumilla</h1>
        <p>Frontend Software Engineer</p>
        {Object.keys(sections).map((e) => (
          <Button onClick={() => handleReduxClick(e)}>{e}</Button>
        ))}
      </div>

      {Object.entries(sections).map(([key, value]) => {
        const Component = componentMapping[key];
        return (
          <div key={key}>
            {value === true && (
              <Slide direction='left' in={value} mountOnEnter unmountOnExit>
                <div>{Component && <Component />}</div>
              </Slide>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Main;
