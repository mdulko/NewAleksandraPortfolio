import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ImgComp from "./ImgComp";
import { makeStyles, Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    margin: "0 auto",
    flexDirection: "column",
  },
  slider: {
    display: "flex",
    maxWidth: "1200px",
    overflow: "hidden",
    margin: "0 auto",
    marginBottom: "20px",
    paddingTop: theme.spacing(2),
  },
  onlySlider: {
    maxWidth: "1400px",
  },
  singleSlide: {
    display: "flex",
    justifySelf: "center",
    minWidth: "100%",
    transition: "0.5s",
  },
  imagesInRow: {
    display: "flex",
    maxWidth: "1200px",
    margin: "0 auto",
    overflow: "hidden",
  },
  smallImage: {
    display: "flex",
    margin: "0 5px",
    border: "1px solid hsl(0, 0%, 80%)",
  },
}));
const Carousel = ({ imgArray, list }) => {
  const classes = useStyles();
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (imgArray.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (imgArray.length - 1) ? setX(0) : setX(x - 100);
  };
  const time = 3000;

  useEffect(() => {
    const changeSlide = () => {
      setX(x - 100);
      x === -100 * (imgArray.length - 1) ? setX(0) : setX(x - 100);
    };
    const intervalChange = setInterval(() => {
      changeSlide();
    }, time);
    return () => clearInterval(intervalChange);
  });
  const takeId = document.querySelectorAll("#img");
  return (
    <Box className={classes.mainBox}>
      <Box
        className={
          list
            ? `${classes.slider} `
            : `${classes.slider}  ${classes.onlySlider} `
        }
      >
        {imgArray.map((item, index) => {
          return (
            <div
              key={index}
              className={
                list
                  ? `${classes.singleSlide} `
                  : `${classes.singleSlide}  ${classes.onlySlider} `
              }
              id={`img`}
              style={{ transform: `translateX(${x}%)` }}
            >
              <ImgComp src={item} />
            </div>
          );
        })}
        <button className="goLeft" onClick={goLeft}>
          Left
        </button>
        <button className="goRight" onClick={goRight}>
          Right
        </button>
      </Box>
      {list && (
        <Box className={classes.imagesInRow}>
          {imgArray.map((item, index) => {
            const transX = index * -100;
            const changeId = () => {
              takeId[index].style.transform = `translateX(${transX}%)`;
              setX(index * -100);
            };
            return (
              <div
                key={index}
                className={classes.smallImage}
                onClick={changeId}
              >
                <ImgComp src={item} />
              </div>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

Carousel.propTypes = {
  imgArray: PropTypes.arrayOf(PropTypes.string),
  list: PropTypes.bool,
};

export default Carousel;
