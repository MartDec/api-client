<template>
  <form @submit.prevent="sendRequest">
    <div>
      <RadioInput
        v-for="(method, key) in store.availableMethods"
        :id="`http-method-${method}`"
        :key="key"
        :value="method"
        :checked="isMethodSelected(method)"
        name="method" />
    </div>
    <input
      v-model="store.currentUrl"
      type="text"
      name="request-url"
      placeholder="Enter request URL">
    <input
      type="submit"
      value="send request">
  </form>
</template>

<script setup>
import { inject } from 'vue';
import RadioInput from './RadioInput.vue';

const store = inject('store');

const isMethodSelected = (method) => method === store.currentMethod;

const getResponseData = (response) => {
  const data = null;
  const responseContentType = response.headers.get('Content-Type');

  if (responseContentType.includes('application/json')) {
    return response.json();
  }

  if (responseContentType.includes('text/plain')) {
    return response.text();
  }
};

const sendRequest = async () => {
  try {
    const response = await fetch(store.currentUrl, {
      method: store.currentMethod,
    });
    const data = await getResponseData(response);
    console.log(data);
  } catch (error) {
    console.error('ERROR', error);
  }
};
</script>
