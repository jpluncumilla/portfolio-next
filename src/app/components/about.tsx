"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { resetSections } from "@/redux/slices/sectionSlice";
import { Button } from "@mui/material";

function about() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetSections());
  };

  return (
    <div className='about'>
      <h1>About</h1>
      <p>Paragraphs about the kid</p>
      <Button onClick={handleReset}>Home</Button>
    </div>
  );
}

export default about;
