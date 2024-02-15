import React, { useState } from "react";
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
  styled,
} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

const projects = [
  {
    id: 1,
    name: "WIDOW APP",
    stack: "React.js, Redux, MUI, Jest",
    link: "https://www.widow.app/",
    image: "widow.png",
  },
  {
    id: 2,
    name: "CircleHub",
    stack: "Wordpress, HTML & CSS",
    link: "https://circlehub.net/",
    image: "circlehub.png",
  },
  {
    id: 3,
    name: "TRUDAT APP",
    stack: "Next.js, Redux, MUI & Jest",
    link: "https://braingu.com/solutions/custom-app-dev/",
    image: "trudat.png",
  },
  {
    id: 4,
    name: "Stern-X",
    stack: "React.js, Redux & Bootstrap",
    link: "https://stern-x.com/",
    image: "stern.png",
  },
  {
    id: 5,
    name: "Introlift",
    stack: "Wordpress, HTML & CSS",
    link: "https://introlift.com/",
    image: "introlift.png",
  },
  {
    id: 6,
    name: "FLPL",
    stack: "Wordpress, HTML & CSS",
    link: "https://flpl.biz/",
    image: "flpl.png",
  },
];

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Work() {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
                <Button size='small'>
                  <a href={e.link} target='_blank'>
                    Visit site
                  </a>
                </Button>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout='auto' unmountOnExit>
                <Typography>Add project description prop</Typography>
              </Collapse>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
