<script setup lang="ts">
// Import the image directly
import aboutBackground from "~/assets/images/aboutMe-background.jpg";
import firstDishPicture from "~/assets/images/aboutPage-first.jpg";
import secondDishPicture from "~/assets/images/aboutPage-second.jpg";
</script>

<template>
  <NuxtLayout :overlay="'rgba(9, 13, 14, 0.90)'" :bg-image="aboutBackground">
    <main class="main-container">
      <section class="container about-section">
        <h1 class="heading-section">Our Story</h1>
        <div class="story-section">
          <div class="image-container first-image">
            <img
              class="content-image"
              :src="secondDishPicture"
              alt="Bistro Bliss atmosphere" />
          </div>
          <div class="text-section">
            <p class="content-text">
              Founded in 1998, Bistro Bliss began as a dream to bring the warmth
              and vibrancy of Italian dining to our community. Our journey
              started with a simple idea: to create a place where friends and
              family could gather to enjoy hearty meals made with love and the
              finest ingredients.
            </p>
            <p class="content-text">
              Our bistro offers a cozy and inviting atmosphere, reminiscent of
              the charming eateries found in Italy's picturesque towns. With
              rustic décor, soft lighting, and an open kitchen, guests can feel
              the warmth and hospitality that are the hallmarks of Italian
              culture.
            </p>
          </div>
          <div class="image-container">
            <img
              class="content-image"
              :src="firstDishPicture"
              alt="Bistro Bliss first dish" />
          </div>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>

<style scoped>
.main-container {
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px; /* Add space for navbar */
}
</style>
