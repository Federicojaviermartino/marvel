import { defineStore } from 'pinia';
import { fetchCharacters } from '../services/marvelService';

export const useMarvelStore = defineStore('marvel', {
    state: () => ({
        characters: [],
        selectedCharacter: null,
        comics: [],
        selectedComic: null,
        series: [],
        selectedSeries: null,
        darkMode: false,
    }),

    actions: {
        async fetchCharacters() {
            try {
                const characters = await fetchCharacters();
                this.characters = characters;
            } catch (error) {
                console.error('Error al obtener personajes:', error);
            }
        },
    },
});
