import react, {useState, useEffect} from "react";

import { 
    Container,
    Header,
    HeaderButton,
    Banner
} from "./styles";

import {Feather, Ionicons} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";

import api, {key} from '../../services/api'

function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState({});

    useEffect( () => {

        let isActive = true;

        async function getMovie{

        }

        getMovie();

    }, []);

    return(
        <Container>
            <Header>
                <HeaderButton>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#FFF"
                    />
                </HeaderButton>

                <HeaderButton>
                    <Ionicons
                        name="bookmark"
                        size={28}
                        color="#FFF"
                    
                    />
                </HeaderButton>
            </Header>

        </Container>
    )
}

export default Detail; 

