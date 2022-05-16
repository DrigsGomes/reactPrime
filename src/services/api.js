import { createDrawerNavigator } from "@react-navigation/drawer";
import axios from "axios";

// URL filmes em cartaz

// 'https://api.themoviedb.org/3/'

//movie/now_playing?api_key=3795fdd5a3228f184230c727e26da9e8&language=pt-BR&page=1

export const key = '3795fdd5a3228f184230c727e26da9e8'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;