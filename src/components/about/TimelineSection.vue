<template>
  <q-timeline layout="loose" color="secondary">
    <q-timeline-entry heading>
      <p class="text-h5 q-mb-none">
        <q-icon :name="props.icon" />&nbsp; {{ props.title }}
      </p>
    </q-timeline-entry>
    <q-timeline-entry
      v-for="entry in props.timeline"
      v-bind:key="entry.title"
      :title="entry.title"
      :subtitle="entry.text"
      :side="entry.side"
      :icon="entry.icon"
    >
      <p>
        {{ entry.subtitle }}
      </p>
      <p v-if="entry.url">
        <q-btn
          :href="entry.url"
          :label="entry.urlText || 'View certificate'"
          icon="open_in_new"
          target="_blank"
          color="primary"
          size="md"
          no-caps
          square
        />
      </p>
    </q-timeline-entry>
  </q-timeline>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
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
