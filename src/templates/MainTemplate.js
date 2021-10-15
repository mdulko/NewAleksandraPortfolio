import React from "react";
import {Box, CssBaseline, NoSsr, StylesProvider} from "@material-ui/core";
import Nav from "../components/medium/Nav/Nav";
import MainTheme from "../theme/MainTheme";
import {makeStyles} from "@material-ui/core/styles";
import Footer from "../components/medium/Footer/Footer";
import Routes from "../routes/Routing";
import MoveToTop from "../components/small/MoveToTop/MoveToTop";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        minHeight: "313px",
        [theme.breakpoints.down("xs")]: {
            position: "relative",
            top: "46px",
        },
    },
}));

const MainTemplate = () => {
    const classes = useStyles();

    return (
        <NoSsr>
            <MainTheme>
                <StylesProvider>
                    <CssBaseline/>
                    <Nav/>
                    <Box mb={8} className={classes.mainBox}>
                        <Routes/>
                    </Box>
                    <MoveToTop/>
                    <Footer/>
                </StylesProvider>
            </MainTheme>
        </NoSsr>
    );
};

export default MainTemplate;
