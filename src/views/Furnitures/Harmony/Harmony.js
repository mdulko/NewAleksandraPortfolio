import React from 'react';
import {Container} from "@material-ui/core";
import Title from "../../../components/small/Title/Title";
import Text from "../../../components/small/Text/Text";
import Carousel from "../../../components/large/Carousel/Carousel";

const Harmony = ({ln}) => {
    const images = [
        "../../img/Harmony/1.jpg",
        "../../img/Harmony/2.jpg",
        "../../img/Harmony/3.jpg",
        "../../img/Harmony/4.jpg",
        "../../img/Harmony/5.jpg",
        "../../img/Harmony/6.jpg",
    ];

    return (
        <>
            <Container maxWidth="xl">
                <Title>{ln.projects[1][3].name}</Title>
                <Text align="justify"> {ln.projects[1][3].description} </Text>
            </Container>
            <Carousel imgArray={images} ln={ln} list />
        </>
    );
};

export default Harmony;