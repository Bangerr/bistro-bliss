<script setup lang="ts">
// Import the image directly
import homeBackground from "~/assets/images/desktop-homepage-image.jpg";
</script>

<template>
  <NuxtLayout :bg-image="homeBackground">
    <div class="home-page-main">
      <h1 class="home-page-restaurant-name">Bistro Bliss</h1>
      <p class="home-page-slogan">
        A place, where the rich traditions of Italian cuisine come alive in
        every dish.
      </p>
      <div class="home-page-bookATable">
        <span class="h-[1px] w-32 bg-[#DA9292]"></span>
        <a href="contact" class="text-[#DA9292]">Book a table</a>
        <span class="h-[1px] w-32 bg-[#DA9292]"></span>
      </div>
    </div>
  </NuxtLayout>
</template>
