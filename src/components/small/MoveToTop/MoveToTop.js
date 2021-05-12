import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import styled, { css } from "styled-components";
import { useWindowScroll } from "react-use";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const ScrollBox = styled(Box)`
  ${() => css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 40px;
    right: 100px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 0;
    background-color: black;
    z-index: 1;
  `}
`;

const MoveToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  const scrollTo = () =>
    window.scrollTo({
      top: document.body.offsetTop,
      behavior: "smooth",
    });

  useEffect(() => {
    const top = document.body.offsetTop;
    if (pageYOffset > top) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  return (
    <ScrollBox onClick={scrollTo}>
      <ArrowUpwardIcon style={{ color: "white" }} />
    </ScrollBox>
  );
};

export default MoveToTop;
