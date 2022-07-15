<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="row gradient_style">
      </div>
      <q-toolbar>
        <q-toolbar-title>
          <div class="row align-center justify-center">
            <q-btn flat color="secondary" label="Home" class="q-mx-xs header_selected_button" />
            <q-btn flat color="secondary" label="About" class="q-mx-xs header_selected_button" />
            <q-btn flat color="secondary" label="Link" class="q-mx-xs header_selected_button" />
            <q-btn flat color="secondary" label="Link" class="q-mx-xs header_selected_button" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="q-py-sm">
      <div class="row align-center justify-center">{{ new Date().getFullYear() }} - Quasar v{{ $q.version }}</div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
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
