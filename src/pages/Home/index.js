import react from "react";
import {ScrollView} from 'react-native';

import { Container, 
        SearchContainer, 
        SearchButton, 
        Input, 
        Title, 
        BannerButton, 
        Banner 
    } from "./styles";
import {Feather} from '@expo/vector-icons';

import Header from "../../components/Header";

function Home(){
    return(
        <Container>
            <Header title="React Prime"/>

            <SearchContainer>
                <Input
                placeholder= "Ex: Vingadores"
                placeholderTextColor="#DDD"
                />

                <SearchButton>
                    <Feather
                    name="search" size={30} color="#FFF"/>
                </SearchButton>

            </SearchContainer>

            <ScrollView>
                <Title>Em cartaz</Title>
            </ScrollView>

            <BannerButton>
                <Banner
                resizeMethod="resize"
                Source={{uri: 'https://unsplash.com/photos/atsUqIm3wxo'}}
                />
            </BannerButton>


        </Container>

    )
}

export default Home;