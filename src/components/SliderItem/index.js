import react from "react";

import {View, Text} from 'react-native';
import { SliderMovie } from "../../pages/Home/styles";

import {    
    Container,
    BannerItem,
    Title,
    RateContainer,
    Rate

} from './styles';

import {Ionicons} from '@expo/vector-icons'

function SliderItem(){
    return(
        <Container>

            <BannerItem
                source={{uri:'https://unsplash.com/photos/atsUqIm3wxo'}}
            />

            <Title>Vigadores</Title>

            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74E"/>
                <Rate>9/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem;