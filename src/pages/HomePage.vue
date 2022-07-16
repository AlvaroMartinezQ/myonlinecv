<template>
  <div class="row q-ma-md">
    <div class="col-12 text-center q-mt-md">
      <div class="row">
        <div class="col-4"><q-separator></q-separator></div>
        <div class="col-4">
          <q-img
            src="src/assets/amq-photo.jpg"
            class="personal_pic shadow-4"
            fit="cover"
          >
          </q-img>
        </div>
        <div class="col-4"><q-separator></q-separator></div>
      </div>
      <div class="row items-center justify-evenly">
        <h4 style="font-family: 'Copperplate', Fantasy;" class="q-mb-md">
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
  </div>
</template>

<script setup lang="ts">
import ContactLinksVue from 'src/components/contact/ContactLinks.vue';
</script>

<style scoped>
.personal_pic {
  max-width: 250px;
  height: 250px;
  border-radius: 50%;
}
</style>
