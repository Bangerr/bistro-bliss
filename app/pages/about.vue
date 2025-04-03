<script setup lang="ts">
const layout = "about";
import aboutRestaurantPhoto from "~/assets/images/aboutRestaurantImage.jpg";
</script>

<template>
  <NuxtLayout :name="layout" :overlay="'rgba(11, 19, 21, 0.80)'">
    <main class="main-container">
      <div class="about-banner">
        <div class="banner-content">
          <h1>ABOUT US</h1>
          <p>
            <svg
              v-for="n in 4"
              :key="n"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24">
              <path
                fill="#5f5538"
                d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z" />
            </svg>
          </p>
          <h4>A CLASSIC BISTRO</h4>
        </div>
      </div>

      <section class="about-section">
        <div class="story-sectin-title">
          <h1 class="content-subtitle">A Journey of Passion and Flavor</h1>
        </div>

        <div class="story-section">
          <p class="content-text">
            Founded in 1998, Bistro Bliss began as a dream to bring the warmth
            and vibrancy of Italian dining to our community. Our journey started
            with a simple idea: to create a place where friends and family could
            gather to enjoy hearty meals made with love and the finest
            ingredients.
          </p>
          <p class="content-text">
            Our bistro offers a cozy and inviting atmosphere, reminiscent of the
            charming eateries found in Italy's picturesque towns. With rustic
            décor, soft lighting, and an open kitchen, guests can feel the
            warmth and hospitality that are the hallmarks of Italian culture.
          </p>
        </div>

        <img class="story-section-image" :src="aboutRestaurantPhoto" alt="" />
      </section>
    </main>
  </NuxtLayout>
</template>

<style scoped>
.about-banner {
  height: 500px;
  background-image: url("~/assets/images/about-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 25%;
  box-shadow: inset 0 0 0 2000px rgba(11, 19, 21, 0.8);
}

.banner-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
}

.banner-content h1 {
  color: #b29771;
  font-family: "Cormorant Garamond", sans-serif;
  font-size: 3rem;
}
.banner-content p {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.banner-content h3 {
  color: white;
  font-family: "Jost", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #f8f8f8;
}

.about-section {
  width: 50%;
  margin: 75px auto;
  margin-top: 75px;
  margin-bottom: 130px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.story-sectin-title h1:first-child {
  font-family: "Cormorant Garamond", sans-serif;
  font-size: 2rem;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: center;
}

.content-text {
  font-family: "Jost", sans-serif;
  font-weight: 200;
}

@media only screen and (max-width: 769px) {
  .about-banner {
    height: 300px;
  }

  .banner-content h1 {
    color: #f8f8f8;
    font-family: "Cormorant Garamond", sans-serif;
    font-size: 2rem;
  }

  .banner-content h4 {
    color: white;
    font-family: "Jost", sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    color: #f8f8f8;
  }

  .about-section {
    width: 100%;
    margin: 50px auto;
    padding: 0 30px;
  }

  .about-section img {
    margin-bottom: 50px;
  }
}
</style>
