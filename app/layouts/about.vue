<!--  -->
<script setup lang="ts">
const props = defineProps({
  bgImage: {
    type: String,
    default: "",
  },
  overlay: {
    type: String,
    default: "rgba(9, 13, 14, 0.69)",
  },
});
</script>

<template>
  <div class="layout-container">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>
