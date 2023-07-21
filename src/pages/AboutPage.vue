<template>
  <div class="row q-ma-md">
    <div class="col-12 q-mt-md">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="row q-mx-md text-overline">
            <div class="col-6 text-center" v-if="!$q.platform.is.mobile">
              <q-img src="~assets/amq-photo.jpg" class="personal_pic shadow-4" fit="cover">
              </q-img>
            </div>
            <div :class="$q.platform.is.mobile
              ? 'col-12 text-justify'
              : 'col-6 text-justify'
              ">
              <IntroSectionVue />
            </div>
          </div>
          <q-separator class="q-my-md"></q-separator>
          <div class="row q-mx-md">
            <div v-for="entry in time_sections" v-bind:key="entry.title" :class="$q.platform.is.mobile
                ? 'col-12 text-center'
                : 'col-6 text-center'
              ">
              <TimelineSectionVue :title="entry.title" :timeline="entry.timeline" :icon="entry.icon" />
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <ContactLinksVue class="text-center" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import ContactLinksVue from 'src/components/contact/ContactLinks.vue';
import IntroSectionVue from 'src/components/about/IntroSection.vue';
import TimelineSectionVue from 'src/components/about/TimelineSection.vue';
import TimelineEntry from 'src/types/TimelineEntry';
import w_timeline from 'src/components/about/WorkTimeline';
import l_timeline from 'src/components/about/LearnTimeline';

const $q = useQuasar();

const work_timeline = ref(w_timeline as TimelineEntry[]);
const learn_timeline = ref(l_timeline as TimelineEntry[]);

const time_sections = ref([
  { title: 'Work experience', icon: 'work', timeline: work_timeline.value },
  { title: 'Education', icon: 'school', timeline: learn_timeline.value },
]);
</script>

<style scoped>
.personal_pic {
  max-width: 125px;
  height: 125px;
  border-radius: 50%;
}
</style>
