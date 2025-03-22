<script setup lang="ts">
// Import the image directly
import aboutBackground from "~/assets/images/aboutMe-background.jpg";
import firstDishPicture from "~/assets/images/aboutPage-first.jpg";
import secondDishPicture from "~/assets/images/aboutPage-second.jpg";
</script>

<template>
  <NuxtLayout :overlay="'rgba(9, 13, 14, 0.95)'" :bg-image="aboutBackground">
    <main>
      <section class="container aboutSection">
        <div class="about-page-first-text">
          <h1 class="about-page-heading">Our Story</h1>
          <div class="about-page-first-section">
            <p class="about-page-text">
              Founded in 1998, Bistro Bliss began as a dream to bring the warmth
              and vibrancy of Italian dining to our community. Our journey
              started with a simple idea: to create a place where friends and
              family could gather to enjoy hearty meals made with love and the
              finest ingredients.
            </p>
            <div class="w-[700px] relative">
              <img
                class="about-page-image"
                src="~/assets/images/aboutPage-first.jpg"
                alt="dishPicture" />
            </div>
          </div>
        </div>
        <p class="about-page-text">
          Our bistro offers a cozy and inviting atmosphere, reminiscent of the
          charming eateries found in Italy's picturesque towns. With rustic
          décor, soft lighting, and an open kitchen, guests can feel the warmth
          and hospitality that are the hallmarks of Italian culture.
        </p>
      </section>
    </main>
  </NuxtLayout>
</template>
