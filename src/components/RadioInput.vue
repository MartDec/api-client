<template>
  <input
    :id="id"
    type="radio"
    :name="name"
    :checked="checked">
  <label :for="id">{{ value }}</label>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  value: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false,
  }
});
</script>
