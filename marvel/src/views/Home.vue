<template>
    <div>
        <h1>Lista de Personajes</h1>
        <CharacterList :characters="characters" @selectCharacter="selectCharacter" />
        <h2>Detalles del Personaje</h2>
        <CharacterDetail :character="selectedCharacter" />
    </div>
</template>
<script>
import { computed } from 'vue'
import { useMarvelStore } from '../store'

export default {
    setup() {
        const marvelStore = useMarvelStore()

        const characters = computed(() => marvelStore.characters)
        const selectedCharacter = computed(() => marvelStore.selectedCharacter)

        const selectCharacter = (character) => {
            marvelStore.fetchCharacterDetails(character.id)
        }

        return {
            characters,
            selectedCharacter,
            selectCharacter,
        }
    },
}
</script>