import react from "react";
import {View, Text} from 'react-native';

import { Container } from "./styles";
import {Feather} from '@expo/vector-icons';

import Header from "../../components/Header";

function Home(){
    return(
        <Container>
            <Header title="React Prime"/>

            <SearchContainer></SearchContainer>


        </Container>

    )
}

export default Home;