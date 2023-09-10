<template>
    <div v-if="character">
        <h3>{{ character.name }}</h3>
        <p>{{ character.description }}</p>
    </div>
</template>
  
<script>
export default {
    props: {
        character: Object,
    },
}
</script>
  