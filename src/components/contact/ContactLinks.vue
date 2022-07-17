<template>
  <div class="row items-center justify-evenly">
    <div class="col-12">
      <q-separator class="q-my-md"></q-separator>
      <q-btn
        v-for="link in links"
        v-bind:key="link.name"
        flat
        color="primary"
        class="q-mx-sm"
        :href="link.url"
        target="_blank"
      >
        <q-icon
          :name="link.icon"
          :color="$q.dark.isActive ? 'secondary' : 'black'"
          size="2.5em"
        />
      </q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { mdiLinkedin, mdiGithub } from '@mdi/js';
import { ref } from 'vue';
import ContactLink from 'src/types/ContactLink';

const $q = useQuasar();

const linkedin_link = ref(import.meta.env.VITE_LINK_LINKEDIN as string);
const github_link = ref(import.meta.env.VITE_LINK_GITHUB as string);

const links = ref([
  { name: 'LinkedIn', url: linkedin_link.value, icon: mdiLinkedin },
  { name: 'Github', url: github_link.value, icon: mdiGithub }
] as ContactLink[])
</script>
