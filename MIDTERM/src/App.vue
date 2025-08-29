<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import AboutUs from './components/AboutUs.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/document.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Cabe, Justin D." />
    </div>
  </header>

  <main>
    <TheWelcome />
    <div id="app">
    <h1>{{ msg }}</h1>

    <!-- Demo 1. Insert the component name, as show below -->
     <about-us></about-us>
  </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 10px;
  border: 2px solid #00eeff;
  background-color: #f0f0f0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
