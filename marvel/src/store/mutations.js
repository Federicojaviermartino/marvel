import { defineStore } from 'pinia'

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
                const charactersData = await fetchDataFromMarvelAPI(); // Reemplaza esto con tu llamada a la API real
                this.characters = charactersData;
            } catch (error) {
                console.error('Error al obtener personajes:', error);
            }
        },
        async fetchCharacterDetails(characterId) {
            try {
                const characterData = await fetchDataFromMarvelAPI(characterId); // Reemplaza esto con tu llamada a la API real
                this.selectedCharacter = characterData;
            } catch (error) {
                console.error('Error al obtener detalles del personaje:', error);
            }
        },
    },
})
