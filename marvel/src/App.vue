<template>
  <div id="app">
    <header>
      <h1>Marvel SPA</h1>
      <button @click="toggleDarkMode">Toggle Dark Mode</button>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>


<script>
import { useStore } from 'pinia';
export default {
  methods: {
    toggleDarkMode() {
      const store = useStore();
      console.log(store.darkmode)
      store.darkmode = !store.darkmode;
      console.log(store.darkmode)
    },
  },
};
</script>
