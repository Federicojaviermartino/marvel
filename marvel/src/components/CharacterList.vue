<template>
    <ul>
        <li v-for="character in characters" :key="character.id">
            <button @click="selectCharacter(character)">{{ character.name }}</button>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        characters: Array,
    },
    methods: {
        selectCharacter(character) {
            this.$emit('selectCharacter', character)
        },
    },
}
</script>