<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="row gradient_style"></div>
      <q-toolbar>
        <q-toolbar-title class="row align-center justify-center">
          <q-tabs
            v-model="current_tab"
            class="text-secondary"
            inline-label
            v-if="!$q.platform.is.mobile"
          >
            <q-tab
              v-for="tab in tabs"
              v-bind:key="tab.name"
              :name="tab.name"
              :icon="tab.icon"
              :label="tab.label"
            />
          </q-tabs>
          <q-btn-dropdown
            color="secondary"
            label="Links"
            size="sm"
            text-color="black"
            v-else
          >
            <q-list>
              <q-item
                v-for="tab in tabs"
                v-bind:key="tab.name"
                clickable
                v-close-popup
                @click="current_tab = tab.name"
              >
                <q-item-section>
                  <q-item-label>{{ tab.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
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
        <q-space></q-space>
        Copyright &copy; {{ new Date().getFullYear() }} AMQ. All rights reserved
        <q-space></q-space>
        <q-btn
          href="https://github.com/AlvaroMartinezQ/myonlinecv"
          label="Codebase"
          color="secondary"
          class="q-mr-sm q-pa-xs"
          icon="code"
          target="_blank"
          size="sm"
          flat
        ></q-btn>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const $router = useRouter();

const current_tab = ref('home');
const dark_mode = ref(true);

$q.dark.set(dark_mode.value);

const tabs = ref([
  { name: 'home', icon: 'home', label: 'Home' },
  { name: 'about', icon: 'face', label: 'About' },
  { name: 'projects', icon: 'topic', label: 'Projects' },
  { name: 'contact', icon: 'alternate_email', label: 'contact' },
]);

watch(current_tab, (new_val) => {
  if (new_val === 'home') {
    $router.push({ name: 'home_page' });
  } else {
    $router.push({ name: new_val + '_page' });
  }
});
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
