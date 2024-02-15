import React from "react";
import { useDispatch } from "react-redux";
import { resetSections } from "@/redux/slices/sectionSlice";
import { Box, Button, TextField } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Contact() {
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

      <div className='contact-content'>
        <h1 className='title'>CONTACT.</h1>
        <div className='contact-text'>
          <p>
            Let&apos;s connect, collaborate and make your project a reality.
          </p>
        </div>

        <div className='contact-links'>
          <a href='https://www.linkedin.com/in/jpluncumilla/' target='_blank'>
            <p>1. linkedin.</p>
          </a>
          <a href='https://github.com/jpluncumilla' target='_blank'>
            <p>2. github.</p>
          </a>
          <a href='mailto:jpluncumilla@gmail.com' target='_blank'>
            <p>3. email.</p>
          </a>
          <a
            href='https://drive.google.com/file/d/17jloNb7V4A1i_2zjTD2ZSoCgkCFkIjKy/view?usp=sharing'
            target='_blank'
          >
            <p>4. resume.</p>
          </a>
        </div>
        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 1, width: "40ch", borderColor: "#fffff" },
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField id='outlined-basic' label='Name' variant='outlined' />
          <TextField id='standard-basic' label='E-mail' variant='outlined' />
        </Box>
        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='standard-basic'
            label='Company name'
            variant='outlined'
          />
          <TextField id='standard-basic' label='Message' variant='outlined' />
        </Box>
        <div className='content-button'>
          <Button
            variant='contained'
            color='success'
            endIcon={<ArrowForwardIosIcon />}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
