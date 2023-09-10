<template>
    <div v-if="series">
        <h2>Detalles de la Serie</h2>
        <div class="series-details">
            <div class="series-info">
                <h3>{{ series.title }}</h3>
                <p>{{ series.description }}</p>
                <p><strong>Fechas:</strong> {{ formatDate(series.startYear) }} - {{ formatDate(series.endYear) }}</p>
            </div>
            <div class="series-image">
                <img :src="series.thumbnail.path + '.' + series.thumbnail.extension" alt="Portada de la serie" />
            </div>
        </div>
    </div>
    <div v-else>
        <p>Selecciona una serie para ver los detalles.</p>
    </div>
</template>
<script>
import { computed } from 'vue'
import { useMarvelStore } from '../store'

export default {
    props: {
        seriesId: Number,
    },
    setup(props) {
        const marvelStore = useMarvelStore()

        const series = computed(() => {
            return marvelStore.series.find((s) => s.id === props.seriesId)
        })

        const formatDate = (date) => {
            return new Date(date).toLocaleDateString()
        }

        return {
            series,
            formatDate,
        }
    },
}
</script>
<style scoped>
.series-details {
    display: flex;
    align-items: center;
}

.series-info {
    flex: 1;
    padding: 20px;
}

.series-image {
    flex: 1;
    text-align: center;
}

.series-image img {
    max-width: 100%;
    height: auto;
}
</style>