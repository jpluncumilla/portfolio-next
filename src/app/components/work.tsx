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

const projects = [
  {
    id: 1,
    name: "WIDOW",
    stack: "React.js, Redux, MUI, Jest",
    image: "widow.png",
  },
  {
    id: 2,
    name: "RANDOM",
    stack: "React.js, Redux, MUI, Jest",
    image: "widow.png",
  },
];

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

      <div className='about-content-2'>
        <h1 className='work-title'>WORK.</h1>
        <div className='work-content'>
          {projects.map((e, i) => (
            <Card sx={{ maxWidth: 370 }} className='card' key={i}>
              <CardMedia component='img' alt={e.name} image={`/${e.image}`} />
              <CardContent className='card-content'>
                <h1 className='card-title'>{e.name}</h1>
                <p className='card-paragraph'>Stack: {e.stack}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default work;
