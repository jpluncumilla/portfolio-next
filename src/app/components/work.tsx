import React from "react";
import { useDispatch } from "react-redux";
import { resetSections } from "@/redux/slices/sectionSlice";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "@mui/icons-material";

function work() {
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
          <span>.IO</span>
        </p>
        <WestIcon onClick={handleReset}>{/* <ClearIcon /> */}</WestIcon>
      </div>

      <div className='about-content'>
        <h1 className='work-title'>WORK.</h1>
        <div className='work-content'>
          <Card sx={{ maxWidth: 380 }} className='card'>
            <CardMedia
              component='img'
              alt='WIDOW App' //Pass prop title
              height='140'
              image={"/widow.png"} //Pass image id and name each picture with id name
            />
            <CardContent className='card-content'>
              <h1 className='card-title'>WIDOW</h1> {/*Pass prop title */}
              <p className='card-paragraph'>Stack: Add stack prop</p>{" "}
              {/*Pass prop desctiption */}
            </CardContent>
            <CardActions>
              <Button size='small'>Visit site</Button>
              <ExpandMore
              //   expand={expanded}
              //   onClick={handleExpandClick}
              //   aria-expanded={expanded}
              //   aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={false} timeout='auto' unmountOnExit>
              Add project description prop
            </Collapse>
          </Card>

          <Card sx={{ maxWidth: 380 }} className='card'>
            <CardMedia
              component='img'
              alt='WIDOW App' //Pass prop title
              height='140'
              image={"/widow.png"} //Pass image id and name each picture with id name
            />
            <CardContent className='card-content'>
              <h1 className='card-title'>WIDOW</h1> {/*Pass prop title */}
              <p className='card-paragraph'>Stack: Add stack prop</p>{" "}
              {/*Pass prop desctiption */}
            </CardContent>
            <CardActions>
              <Button size='small'>Visit site</Button>
              <ExpandMore
              //   expand={expanded}
              //   onClick={handleExpandClick}
              //   aria-expanded={expanded}
              //   aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={false} timeout='auto' unmountOnExit>
              Add project description prop
            </Collapse>
          </Card>

          <Card sx={{ maxWidth: 380 }} className='card'>
            <CardMedia
              component='img'
              alt='WIDOW App' //Pass prop title
              height='140'
              image={"/widow.png"} //Pass image id and name each picture with id name
            />
            <CardContent className='card-content'>
              <h1 className='card-title'>WIDOW</h1> {/*Pass prop title */}
              <p className='card-paragraph'>Stack: Add stack prop</p>{" "}
              {/*Pass prop desctiption */}
            </CardContent>
            <CardActions>
              <Button size='small'>Visit site</Button>
              <ExpandMore
              //   expand={expanded}
              //   onClick={handleExpandClick}
              //   aria-expanded={expanded}
              //   aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={false} timeout='auto' unmountOnExit>
              Add project description prop
            </Collapse>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default work;
