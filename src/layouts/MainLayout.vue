<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="row gradient_style"></div>
      <q-toolbar>
        <q-toolbar-title>
          <q-tabs v-model="tab" class="text-secondary" inline-label>
            <q-tab name="mails" icon="home" label="Mails" />
            <q-tab name="alarms" icon="face" label="About" />
            <q-tab name="movies" icon="alternate_email" label="Contact" />
          </q-tabs>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="q-py-sm">
      <div class="row align-center justify-center">
        {{ new Date().getFullYear() }} - Quasar v{{ $q.version }}
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('mails');
</script>

<style scoped>
.gradient_style {
  background: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
  height: 5px;
}
.header_selected_button {
  border-bottom-color: #000000;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-radius: 0;
}
</style>
