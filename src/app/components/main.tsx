"use client";
import React, { useState } from "react";
import "./main.css";
import { Button, Slide } from "@mui/material";

const about = (
  <div>
    <h1>About</h1>
    <p>Paragraphs about the kid</p>
  </div>
);
function Main() {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <div className='main'>
        <h1>JP Luncumilla</h1>
        <p>Frontend Software Engineer</p>
        <Button onClick={handleChecked}>About</Button>
      </div>
      <Slide direction='left' in={checked} mountOnEnter unmountOnExit>
        {about}
      </Slide>
    </div>
  );
}

export default Main;
