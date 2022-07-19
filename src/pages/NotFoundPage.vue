<template>
  <div class="fullscreen bg-primary text-secondary text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 20vh">404</div>

      <div class="text-h2" style="opacity: 0.4">
        Oops
        <q-icon :name="mdiEmoticonDead" />
        Nothing here...
      </div>

      <q-btn class="q-mt-xl" color="secondary" text-color="black" unelevated to="/" label="Go home" no-caps icon="west"
        style="border-radius: 0%;" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiEmoticonDead } from '@mdi/js';
</script>
