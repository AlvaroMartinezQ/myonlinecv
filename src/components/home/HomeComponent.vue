<template>
  <div class="col-12 text-center q-mt-md">
    <div class="row">
      <div :class="$q.platform.is.mobile ? 'col-0' : 'col-4'">
        <q-separator></q-separator>
      </div>
      <div :class="$q.platform.is.mobile ? 'col-12' : 'col-4'">
        <q-img src="~assets/amq-photo.jpg" :class="
          $q.platform.is.mobile
            ? 'personal_pic_mobile shadow-4'
            : 'personal_pic shadow-4'
        " fit="cover">
        </q-img>
      </div>
      <div :class="$q.platform.is.mobile ? 'col-0' : 'col-4'">
        <q-separator></q-separator>
      </div>
    </div>
    <div class="row items-center justify-evenly">
      <h4 style="font-family: 'Copperplate', Fantasy" class="q-mb-md">
        ÁLVARO MARTÍNEZ QUIROGA
      </h4>
    </div>
    <div class="row items-center justify-evenly">
      <p class="text-overline">Software engineer & gym enthusiast</p>
    </div>
    <div class="row items-center justify-evenly">
      <h2 class="sweetfont">`It always seems impossible until it's done`</h2>
    </div>
    <ContactLinksVue />
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import ContactLinksVue from 'src/components/contact/ContactLinks.vue';

const $q = useQuasar();
</script>

<style scoped>
.personal_pic {
  width: 250px;
  height: 250px;
  border-radius: 50%;
}

.personal_pic_mobile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
