import React from "react";
import { useDispatch } from "react-redux";
import { resetSections } from "@/redux/slices/sectionSlice";
import { Button } from "@mui/material";
function work() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetSections());
  };
  return (
    <div className='about'>
      <h1>work</h1>
      <p>Paragraphs about the kid</p>
      <Button onClick={handleReset}>Home</Button>
    </div>
  );
}

export default work;
