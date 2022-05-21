import react, {useState, useEffect}from "react";
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

import api, {key} from "../../services/api";

import { getListMovies } from "../../utils/movie";


function Home(){

    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState ([]);
    const [topMovies, setTopMovies] = useState ([]);

    useEffect(()=>{
        let isActive = true;

        async function getMovies(){

            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing', {
                    params:{
                        api_key: key,
                        language:'pt-BR',
                        page:1,
                    }
                }),

                api.get('/movie/popular', {
                    params:{
                        api_key: key,
                        language:'pt-BR',
                        page:1,
                    }
                }),

                api.get('/movie/top_rated', {
                    params:{
                        api_key: key,
                        language:'pt-BR',
                        page:1,
                    }
                }),
            ])

            const nowList = getListMovies(10, nowData.data.results);
            const popularList = getListMovies(5, popularData.data.results);
            const topList = getListMovies(5, topData.data.results);


            setNowMovies(nowList);
            setPopularMovies(popularList);
            setTopMovies(topList);



        }
        
        getMovies();

    }, [])



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

            <ScrollView showsHorizontalScrollIndicator={false}>
                <Title>Em cartaz</Title>

                <BannerButton activeOpacity={0.9} onPress={ () => alert('Tesssste')}> 
                    <Banner
                    resizeMethod="resize"
                    Source={{uri: 'https://unsplash.com/photos/atsUqIm3wxo'}}
                    />
                 </BannerButton>

                <SliderMovie
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={nowMovies}
                renderItem={({item}) => <SliderItem data={item}/> }
                keyExctractor={(item) => String(item.id)}
                />

                <Title>Populares</Title>

                <SliderMovie
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={popularMovies}
                renderItem={({item}) => <SliderItem data={item}/> }
                keyExctractor={(item) => String(item.id)}
                />

                <Title>Mais votados</Title>

                <SliderMovie
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={topMovies}
                renderItem={({item}) => <SliderItem data={item}/> }
                keyExctractor={(item) => String(item.id)}             
                />

            </ScrollView>


        </Container>

    )
}

export default Home;