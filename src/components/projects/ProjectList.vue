<template>
  <div class="col-12 q-mt-md">
    <div class="row q-mb-md" v-for="entry in projects" v-bind:key="entry.name">
      <div :class="$q.platform.is.mobile ? 'col-0' : 'col-2'"></div>
      <div :class="$q.platform.is.mobile ? 'col-12 q-mx-sm' : 'col-8'">
        <q-expansion-item :label="entry.name" :caption="entry.short_description">
          <q-separator />
          <q-card-section class="q-mx-sm">
            <div class="row">
              <q-icon v-for="icon in entry.icon" v-bind:key="icon" :name="icon" size="2em" class="q-mr-sm" />
            </div>
            <div class="row q-mt-sm">
              {{ entry.long_description }}
              <br>
              <q-btn color="secondary" label="Codebase" :href="entry.repo_link" target="_blank" size="sm"
                text-color="black" class="q-mt-sm" />
            </div>
          </q-card-section>
        </q-expansion-item>
        <q-separator />
      </div>
      <div :class="$q.platform.is.mobile ? 'col-0' : 'col-2'"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import projects from './ProjectList';

const $q = useQuasar();
</script>
