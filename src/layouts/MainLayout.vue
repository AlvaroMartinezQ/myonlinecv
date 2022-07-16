<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="row gradient_style"></div>
      <q-toolbar>
        <q-toolbar-title class="row align-center justify-center">
          <q-tabs v-model="tab" class="text-secondary" inline-label>
            <q-tab name="home" icon="home" label="Home" />
            <q-tab name="about" icon="face" label="About" />
            <q-tab name="projects" icon="topic" label="Projects" />
            <q-tab name="contact" icon="alternate_email" label="Contact" />
          </q-tabs>
          <q-toggle
            v-model="dark_mode"
            :color="dark_mode ? 'black' : 'white'"
            :icon="dark_mode ? 'dark_mode' : 'light_mode'"
            @click="$q.dark.set(dark_mode)"
            keep-color
            size="md"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="q-py-sm">
      <div class="row align-center justify-center">
        Copyright &copy; {{ new Date().getFullYear() }} AMQ. All rights reserved
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const $router = useRouter();

const tab = ref('home');
const dark_mode = ref(true);

$q.dark.set(dark_mode.value);

watch(tab, (new_val) => {
  if (new_val === 'home') {
    $router.push({ name: 'home_page' });
  } else {
    $router.push({ name: new_val + '_page' });
  }
})
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
