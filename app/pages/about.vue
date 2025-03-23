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
        <!-- First content section: Story heading + first paragraph + first image -->
        <div class="content-section story-section">
          <div class="content-row">
            <h1 class="section-heading">Our Story</h1>
            <p class="content-text">
              Founded in 1998, Bistro Bliss began as a dream to bring the warmth
              and vibrancy of Italian dining to our community. Our journey
              started with a simple idea: to create a place where friends and
              family could gather to enjoy hearty meals made with love and the
              finest ingredients.
            </p>
            <div class="image-container">
              <img
                class="content-image"
                src="~/assets/images/aboutPage-first.jpg"
                alt="Bistro Bliss first dish" />
            </div>
          </div>
        </div>

        <!-- Second content section: second paragraph + second image -->
        <div class="content-section atmosphere-section">
          <div class="content-row">
            <div class="image-container">
              <img
                class="content-image"
                src="~/assets/images/aboutPage-second.jpg"
                alt="Bistro Bliss atmosphere" />
            </div>
            <p class="content-text">
              Our bistro offers a cozy and inviting atmosphere, reminiscent of
              the charming eateries found in Italy's picturesque towns. With
              rustic décor, soft lighting, and an open kitchen, guests can feel
              the warmth and hospitality that are the hallmarks of Italian
              culture.
            </p>
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
