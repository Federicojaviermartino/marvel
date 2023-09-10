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
    },

    async fetchCharacterDetails(characterId) {
    },

    async fetchComicDetails(comicId) {
    },

    async fetchSeriesDetails(seriesId) {
    },

    toggleDarkMode() {
    },
  },
})
