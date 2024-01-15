"use client";
import React from "react";
import "./main.css";
import { Button, Slide } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSection } from "@/redux/slices/sectionSlice";

const about = () => (
  <div className='about'>
    <h1>About</h1>
    <p>Paragraphs about the kid</p>
  </div>
);
function Main() {
  const dispatch = useDispatch();
  const { sections } = useSelector((state: RootState) => state.section);

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

      {Object.entries(sections).map(([key, value]) => (
        <div key={key}>
          {value === true && (
            <Slide direction='left' in={value} mountOnEnter unmountOnExit>
              {eval(key)()}
            </Slide>
          )}
        </div>
      ))}
    </div>
  );
}

export default Main;
