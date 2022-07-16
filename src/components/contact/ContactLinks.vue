<template>
  <div class="row items-center justify-evenly">
    <div class="col-12">
      <q-btn
        flat
        color="primary"
        class="q-mx-sm"
        :href="linkedin_link"
        target="_blank"
      >
        <q-icon
          :name="mdiLinkedin"
          :color="$q.dark.isActive ? 'secondary' : 'black'"
          size="2.5em"
        />
      </q-btn>
      <q-btn
        flat
        color="primary"
        class="q-mx-sm"
        :href="github_link"
        target="_blank"
      >
        <q-icon
          :name="mdiGithub"
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

const $q = useQuasar();

const linkedin_link = ref(import.meta.env.VITE_LINK_LINKEDIN as string);
const github_link = ref(import.meta.env.VITE_LINK_GITHUB as string);
</script>
