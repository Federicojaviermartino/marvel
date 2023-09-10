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
export default {
  methods: {
    toggleDarkMode() {
      this.$store.marvel.toggleDarkMode();
    },
  },
};
</script>
