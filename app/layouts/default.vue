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
  <div
    class="layout-container"
    :class="{ 'has-bg': bgImage }"
    :style="
      bgImage
        ? {
            backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${bgImage})`,
          }
        : {}
    ">
    <Navbar />
    <slot />
  </div>
</template>

<style scoped>
.layout-container {
  min-height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0b1315;
}

.has-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
