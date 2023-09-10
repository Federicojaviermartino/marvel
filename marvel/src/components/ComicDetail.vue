<template>
    <div v-if="comic">
        <h2>Detalles del Cómic</h2>
        <div class="comic-details">
            <div class="comic-info">
                <h3>{{ comic.title }}</h3>
                <p>{{ comic.description }}</p>
                <p><strong>Precio:</strong> ${{ comic.prices[0].price }}</p>
                <p><strong>Fecha de lanzamiento:</strong> {{ comic.dates[0].date }}</p>
            </div>
            <div class="comic-image">
                <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="Portada del cómic" />
            </div>
        </div>
    </div>
    <div v-else>
        <p>Selecciona un cómic para ver los detalles.</p>
    </div>
</template>
<script>
import { computed } from 'vue'
import { useMarvelStore } from '../store'

export default {
    props: {
        comicId: Number,
    },
    setup(props) {
        const marvelStore = useMarvelStore()

        const comic = computed(() => {
            return marvelStore.comics.find((c) => c.id === props.comicId)
        })

        return {
            comic,
        }
    },
}
</script>
<style scoped>
.comic-details {
    display: flex;
    align-items: center;
}

.comic-info {
    flex: 1;
    padding: 20px;
}

.comic-image {
    flex: 1;
    text-align: center;
}

.comic-image img {
    max-width: 100%;
    height: auto;
}
</style>