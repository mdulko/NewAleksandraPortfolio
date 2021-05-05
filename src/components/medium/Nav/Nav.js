import React, { useState } from "react";
import { AppBar, makeStyles, Box, Button } from "@material-ui/core";
import styled, { css } from "styled-components";
import Text from "../../small/Text/Text";
import themes from "../../../theme/theme";
import pl from "../../../translations/pl.json";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const AppBarStyled = styled(AppBar)`
  ${({ theme }) => css`
    background-color: ${themes.palette.white};
    color: ${themes.palette.black};
    font-variant: small-caps;
    text-align: center;
    box-shadow: none;
    border-top: 1px solid hsl(0, 0%, 85%);
    border-bottom: 1px solid hsl(0, 0%, 85%);
    ${theme.breakpoints.down("xs")} {
      padding: ${theme.spacing(5, 0, 5, 10)};
      position: fixed;
      transform: translateX(-100%);
      top: 46px;
    }
  `}
`;
const BoxStyled = styled(Box)`
  ${() => css`
    background-color: ${themes.palette.white};
    position: absolute;
  `}
`;
const BoxStyledSecond = styled(Box)`
  ${({ theme }) => css`
    padding: 10px 20px;
    text-align: start;
    font-weight: 500;
    cursor: pointer;
    :hover {
      color: ${themes.palette.red};
      background-color: ${themes.palette.onHover};
    }
    ${theme.breakpoints.down("xs")} {
      :hover {
        background-color: ${themes.palette.white};
      }
    }
  `}
`;
const BoxStyledLi = styled(Box)`
  ${({ theme }) => css`
    background-color: ${themes.palette.white};
    border-left: 1px solid black;
    position: absolute;
    text-align: start;
    right: 0;
    transform: translate(100%, -42px);
    ${theme.breakpoints.down("xs")} {
      position: relative;
      right: auto;
      transform: none;
    }
  `}
`;

const ButtonStyled = styled(Button)`
  ${() => css`
    font-variant: small-caps;
    text-transform: none;
    font-size: 1rem;
    border-bottom: 1px solid black;
    border-radius: 0px;
    ::after {
      content: "";
      width: 60%;
      height: 1px;
      background-color: white;
      position: absolute;
      right: 0;
      bottom: -1px;
    }
    }
  `}
`;

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    padding: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "start",
      height: "100vh",
    },
  },
  title: {
    fontVariant: "small-caps",
    textAlign: "center",
    padding: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      borderBottom: "1px solid hsl(0, 0%, 85%)",
    },
  },
  navTitle: {
    padding: theme.spacing(0, 2),
    margin: theme.spacing(0, 6),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 2),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 0),
    },
  },
  menuIcon: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      position: "fixed",
      top: theme.spacing(0.6),
      left: theme.spacing(1),
    },
  },
  openMobileMenu: {
    transform: "translateX(-10%) !important",
  },
  boxFixed: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "hsl(0, 0%, 100%)",
      position: "fixed",
      width: "100%",
      zIndex: "100000",
    },
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [isTextSame, setIsTextSame] = useState("");
  const [openProjectList, setOpenProjectList] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const displayButton = (text) => {
    return (
      <ButtonStyled onClick={() => setIsTextSame(text)}>{text}</ButtonStyled>
    );
  };

  const projectList = pl.navTitles.map((item, index) => {
    const projectElement = pl.projects[index].map((element, index) => (
      <Text key={index}>{displayButton(element.name)}</Text>
    ));
    return (
      <BoxStyledSecond key={index}>
        <Text
          variant="h6"
          onClick={() => {
            setIsTextSame(item);
          }}
        >
          {item}
        </Text>
        {isTextSame === item && (
          <BoxStyledLi
            onClick={() => {
              setOpenProjectList(false);
              setOpenMobileNav(false);
            }}
          >
            {projectElement}
          </BoxStyledLi>
        )}
      </BoxStyledSecond>
    );
  });

  return (
    <>
      <Box className={classes.boxFixed}>
        <Box
          className={classes.menuIcon}
          onClick={() => setOpenMobileNav((prevOpen) => !prevOpen)}
        >
          {openMobileNav ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </Box>
        <Text variant="h4" className={classes.title}>
          Aleksandra Klińska
        </Text>
      </Box>
      <AppBarStyled
        position="static"
        className={openMobileNav && classes.openMobileMenu}
      >
        <Box className={`${classes.mainBox} ${classes.title}`}>
          <Text variant="h6" className={classes.navTitle}>
            Strona Główna
          </Text>
          <Box>
            <Text
              variant="h6"
              className={classes.navTitle}
              onClick={() => {
                setOpenProjectList((prevOpen) => !prevOpen);
                setIsTextSame("");
              }}
            >
              Moje Projekty
            </Text>
            {openProjectList && <BoxStyled>{projectList}</BoxStyled>}
          </Box>
          <Text variant="h6" className={classes.navTitle}>
            O mnie
          </Text>
          <Text variant="h6" className={classes.navTitle}>
            Kontakt
          </Text>
        </Box>
      </AppBarStyled>
    </>
  );
};

export default Nav;