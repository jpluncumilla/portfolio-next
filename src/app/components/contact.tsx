import React from "react";
import { useDispatch } from "react-redux";
import { resetSections } from "@/redux/slices/sectionSlice";
import { Box, Button, TextField } from "@mui/material";
import WestIcon from "@mui/icons-material/West";

function contact() {
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
        <h1 className='title'>CONTACT.</h1>
        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 1, width: "40ch", color: "#fffff" },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
            color='warning'
          />
          <TextField id='standard-basic' label='E-mail' variant='filled' />
        </Box>
        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='standard-basic'
            label='Company name'
            variant='filled'
          />
          <TextField id='standard-basic' label='Message' variant='filled' />
        </Box>
      </div>
    </div>
  );
}

export default contact;
