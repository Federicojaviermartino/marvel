import { createRouter, createWebHistory } from 'vue-router';
import CharacterList from './components/CharacterList.vue';
import CharacterDetail from './components/CharacterDetail.vue';
import ComicDetail from './components/ComicDetail.vue';
import SeriesDetail from './components/SeriesDetail.vue';

const routes = [
    {
        path: '/',
        name: 'CharacterList',
        component: CharacterList,
    },
    {
        path: '/character/:id',
        name: 'CharacterDetail',
        component: CharacterDetail,
        props: true,
    },
    {
        path: '/comic/:id',
        name: 'ComicDetail',
        component: ComicDetail,
        props: true,
    },
    {
        path: '/series/:id',
        name: 'SeriesDetail',
        component: SeriesDetail,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
