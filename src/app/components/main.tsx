"use client";
import React, { useState } from "react";
import "./main.css";
import { Button, Slide } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSection } from "@/redux/slices/sectionSlice";

const about = (
  handleChecked: React.MouseEventHandler<HTMLButtonElement> | undefined
) => (
  <div className='about'>
    <h1>About</h1>
    <p>Paragraphs about the kid</p>
    <Button onClick={handleChecked}>About</Button>
  </div>
);
function Main() {
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { sections } = useSelector((state: RootState) => state.section);
  console.log(Object.keys(sections));

  const handleChecked = () => {
    setChecked(!checked);
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
          <Button key={e}>{e}</Button>
        ))}
        <Button onClick={handleChecked}>About</Button>
      </div>
      <Slide direction='left' in={checked} mountOnEnter unmountOnExit>
        {about(handleChecked)}
      </Slide>
    </div>
  );
}

export default Main;
