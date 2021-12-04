<script setup>
import { provide, reactive } from 'vue';
import store from './store';
import RequestPanel from './components/RequestPanel.vue';

const state = reactive(store);
provide('store', state);
</script>

<template>
  <div>
    <h1>API client</h1>
    <p>send requests to external APIs</p>
  </div>
  <RequestPanel />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
