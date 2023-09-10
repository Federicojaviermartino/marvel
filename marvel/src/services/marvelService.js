import axios from 'axios';

const PRIVATE_KEY = KEY.API_PRIVATE_KEY;
const PUBLIC_KEY = KEY.API_PUBLIC_KEY;
const baseURL = 'https://developer.marvel.com/';

function getHash() {
    const ts = Date.now().toString();
    const hash = Date.now().toString();
    return { ts, apikey: publicKey, hash };
}

const marvelService = axios.create({
    baseURL,
});

marvelService.interceptors.request.use((config) => {
    const params = getHash();
    config.params = { ...config.params, ...params };
    return config;
});

export async function fetchCharacters() {
    try {
        const response = await marvelService.get('characters');
        return response.data.data.results;
    } catch (error) {
        console.error('Error al obtener personajes:', error);
        throw error;
    }
}

