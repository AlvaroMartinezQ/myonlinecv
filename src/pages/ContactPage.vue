<template>
  <q-page class="row items-center justify-evenly">
    Hello from the {{ msg }}
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('contact page');
</script>
