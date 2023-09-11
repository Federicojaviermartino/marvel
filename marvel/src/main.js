import { createApp } from 'vue';
import App from './App.vue';
import { defineStore } from 'pinia';
import { fetchDataFromMarvelAPI } from './services/marvelService';
import router from '@/router.js';

const app = createApp(App);

const store = defineStore({
    state() {
        return {
            characters: [],
            selectedCharacter: null,
            comics: [],
            selectedComic: null,
            series: [],
            selectedSeries: null,
            darkMode: false,
        };
    },
    mutations: {
        SET_CHARACTERS(state, characters) {
            state.characters = characters;
        },
        SET_SELECTED_CHARACTER(state, character) {
            state.selectedCharacter = character;
        },
    },
    actions: {
        async fetchCharacters({ commit }) {
            try {
                const response = await fetchDataFromMarvelAPI();
                commit('SET_CHARACTERS', response.data.data.results);
            } catch (error) {
                console.error('Error al obtener personajes:', error);
            }
        },
    },
});

app.use(store);

app.use(router);

app.mount('#app');
