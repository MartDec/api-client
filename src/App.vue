<script setup>
import { provide } from '@vue/runtime-core';
import store from './store';
import HelloWorld from './components/HelloWorld.vue';

provide('store', store);
</script>

<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png">
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
