<template>
  <q-timeline :layout="layout" color="secondary">
    <q-timeline-entry heading>
      <p class="text-h5">
        <q-icon :name="props.icon" />&nbsp;
        {{ props.title }}
      </p>
    </q-timeline-entry>
    <q-timeline-entry v-for="entry in props.timeline" v-bind:key="entry.title" :title="entry.title" :subtitle="entry.text"
      :side="entry.side" :icon="entry.icon">
      <p>
        {{ entry.subtitle }}
      </p>
    </q-timeline-entry>
  </q-timeline>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, PropType } from 'vue';
import TimelineEntry from 'src/types/TimelineEntry';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  timeline: {
    type: Array as PropType<Array<TimelineEntry>>,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const $q = useQuasar();

const layout = computed(() => {
  return $q.screen.lt.sm ? 'dense' : $q.screen.lt.md ? 'comfortable' : 'loose';
});
</script>

<style scoped lang="scss">
.q-timeline {
  :deep() {
    .q-timeline__subtitle {
      line-height: 19px;
      text-transform: initial;
      margin-top: 8px;
    }

    .q-timeline__dot {
      color: rgb(172, 129, 189) !important;
    }
  }
}
</style>
