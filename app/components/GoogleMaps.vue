<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";

const config = useRuntimeConfig();
const apiKey = config.public.googleMapsApiKey;
const center = { lat: 46.57534202368565, lng: 11.669564428940173 };

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

const mapHeight = computed(() => {
  return isMobile.value ? "300px" : "600px";
});
</script>

<template>
  <GoogleMap
    class="google-maps-container"
    :api-key="apiKey"
    :style="{ height: mapHeight, border: '1px solid #fff' }"
    :center="center"
    :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<style scoped>
.google-maps-container {
  width: 100%;
  border: 1px solid white;
}

@media only screen and (max-width: 768px) {
  .google-maps-container {
    width: 100%;
  }
}
</style>
