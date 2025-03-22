<!--------------------------------------------------------------------------
  This layout can be used for any page that needs a custom background image  
  Use it with definePageMeta({ layout: 'page-with-bg' })
  and pass the background image URL as a PROP
--------------------------------------------------------------------------->
<script setup lang="ts">
const props = defineProps({
  bgImage: {
    type: String,
    default: "",
  },
  overlay: {
    type: String,
    default: "rgba(9, 13, 14, 0.79)",
  },
});
</script>

<template>
  <div
    class="page-with-bg-layout"
    :style="
      bgImage
        ? {
            backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${bgImage})`,
          }
        : ''
    ">
    <Navbar />
    <slot />
  </div>
</template>

<!-- Applies only to the current file -->
<style scoped>
.page-with-bg-layout {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
