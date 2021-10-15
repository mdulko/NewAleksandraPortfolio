import { Container } from "@material-ui/core";
import React from "react";
import Carousel from "../../../components/large/Carousel/Carousel";
import Text from "../../../components/small/Text/Text";
import Title from "../../../components/small/Title/Title";
import {useSelector} from "react-redux";

const Fusy = () => {
    const ln = useSelector(state => state.languageReducer)
    const images = [
        "../../img/Fusy/1.jpg",
        "../../img/Fusy/2.jpg",
        "../../img/Fusy/3.jpg",
        "../../img/Fusy/3a.jpg",
        "../../img/Fusy/4.jpg",
        "../../img/Fusy/5.jpg",
        "../../img/Fusy/6.jpg",
        "../../img/Fusy/7.jpg",
        "../../img/Fusy/8.jpg",
    ];

    return (
        <>
            <Container maxWidth="xl">
                <Title>{ln.projects[0][3].name}</Title>
                <Text align="justify"> {ln.projects[0][3].description} </Text>
            </Container>
            <Carousel imgArray={images} ln={ln} list />
        </>
    );
};

export default Fusy;
