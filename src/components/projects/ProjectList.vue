<template>
  <div class="col-12 q-mt-md">
    <h5 class="col-12 text-center q-mt-none q-mb-xs">Project list</h5>
    <div class="row q-mb-md" v-for="entry in projects" v-bind:key="entry.name">
      <div :class="$q.platform.is.mobile ? 'col-0' : 'col-2'"></div>
      <div :class="$q.platform.is.mobile ? 'col-12 q-mx-sm' : 'col-8'">
        <q-expansion-item :label="entry.name" :caption="entry.short_description">
          <q-separator />
          <q-card-section class="q-mx-sm">
            <div class="row">
              <q-icon v-for="icon in entry.icon" v-bind:key="icon" :name="icon" size="2em" class="q-mr-sm"
                :color="!$q.dark.isActive ? 'black' : 'secondary'" />
            </div>
            <div class="row q-mt-sm">
              <div class="col-12">
                {{ entry.long_description }}
              </div>
              <div class="col-12">
                <q-btn color="secondary" label="Codebase" :href="entry.repo_link" target="_blank" size="sm"
                  text-color="black" class="q-mt-sm" v-if="entry.repo_link !== ''" />
              </div>
            </div>
          </q-card-section>
        </q-expansion-item>
        <q-separator />
      </div>
      <div :class="$q.platform.is.mobile ? 'col-0' : 'col-2'"></div>
    </div>
    <h6 class="col-12 text-center q-mt-md q-mb-xs">Some POCs</h6>
    <div class="row q-mb-md" v-for="entry in pocs" v-bind:key="entry.name">
      <div :class="$q.platform.is.mobile ? 'col-0' : 'col-2'"></div>
      <div :class="$q.platform.is.mobile ? 'col-12 q-mx-sm' : 'col-8'">
        <q-expansion-item :label="entry.name" :caption="entry.short_description">
          <q-separator />
          <q-card-section class="q-mx-sm">
            <div class="row">
              <q-icon v-for="icon in entry.icon" v-bind:key="icon" :name="icon" size="2em" class="q-mr-sm"
                :color="!$q.dark.isActive ? 'black' : 'secondary'" />
            </div>
            <div class="row q-mt-sm">
              <div class="col-12">
                {{ entry.long_description }}
              </div>
              <div class="col-12">
                <q-btn color="secondary" label="Codebase" :href="entry.repo_link" target="_blank" size="sm"
                  text-color="black" class="q-mt-sm" v-if="entry.repo_link !== ''" />
              </div>
            </div>
          </q-card-section>
        </q-expansion-item>
        <q-separator />
      </div>
      <div :class="$q.platform.is.mobile ? 'col-0' : 'col-2'"></div>
    </div>
    <div class="row q-ma-md">
      <div class="col-12 text-center q-mt-md">
        <ContactLinks />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import projects from './ProjectList';
import pocs from './POCList';
import ContactLinks from 'src/components/contact/ContactLinks.vue';

const $q = useQuasar();
</script>

<style scoped>
.q-btn {
  border-radius: 0%;
}
</style>
