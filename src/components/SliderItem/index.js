import react from "react";

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
        <Container activeOpacity={0.7}> 

            <BannerItem
                source={{uri:'https://unsplash.com/photos/atsUqIm3wxo'}}
            />


            <Title numberOfLines={1}>Vigadores</Title>

            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74E"/>
                <Rate>9/10</Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem;