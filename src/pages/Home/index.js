import react from "react";
import {ScrollView} from 'react-native';

import { Container, 
        SearchContainer, 
        SearchButton, 
        Input, 
        Title, 
        BannerButton, 
        Banner,
        SliderMovie
    } from "./styles";
import {Feather} from '@expo/vector-icons';

import Header from "../../components/Header";

import SliderItem from "../../components/SliderItem";

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

            <BannerButton activeOpacity={0.9} onPress={ () => alert('Tesssste')}> 
                <Banner
                resizeMethod="resize"
                Source={{uri: 'https://unsplash.com/photos/atsUqIm3wxo'}}
                />
            </BannerButton>

            <SliderMovie

            horizontal={true}
            data={1,2,3,4}
            renderItem={({item}) => <SliderItem/> }
            
            />


        </Container>

    )
}

export default Home;