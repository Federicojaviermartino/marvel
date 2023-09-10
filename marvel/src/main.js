import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';
import { fetchDataFromMarvelAPI } from './services/marvelService';

const app = createApp(App);

const store = createStore({
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
                const response = await fetchDataFromMarvelAPI(); // Reemplaza esto con tu llamada a la API real
                commit('SET_CHARACTERS', response.data.data.results);
            } catch (error) {
                console.error('Error al obtener personajes:', error);
            }
        },
    },
});

app.use(store);

app.mount('#app');
