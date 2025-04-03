<script setup lang="ts">
import menuBackground from "../assets/images/menu-background.jpg";
import { breakfastDishes } from "~/utils/test";
import { startersDishes } from "~/utils/test";
import { mainCourseDishes } from "~/utils/test";
import { desertDishes } from "~/utils/test";
import { drinks } from "~/utils/test";

const layout = "menu";
</script>

<template>
  <NuxtLayout :name="layout">
    <main>
      <div class="menu-container">
        <div class="menu-header">
          <div class="menu-header-background">
            <img class="" :src="menuBackground" alt="/background-picture" />
          </div>

          <h1 class="menu-title">Menu</h1>
        </div>

        <section class="content-section">
          <div class="content-container">
            <MenuCard :dishes="breakfastDishes" sectiontitle="BREAKFAST" />
          </div>
        </section>

        <section class="parallax-section">
          <img
            src="~/assets/images/pancake.jpg"
            alt="background"
            class="background" />
        </section>

        <section class="content-section">
          <div class="content-container">
            <MenuCard :dishes="startersDishes" sectiontitle="STARTERS" />
          </div>
        </section>

        <section class="parallax-section">
          <img
            src="~/assets/images/pasta.jpg"
            alt="background"
            class="background" />
        </section>

        <section class="content-section">
          <div class="content-container">
            <MenuCard :dishes="mainCourseDishes" sectiontitle="MAIN COURSE" />
          </div>
        </section>

        <section class="parallax-section">
          <img
            src="~/assets/images/mainCourse.jpg"
            alt="background"
            class="background" />
        </section>

        <section class="content-section">
          <div class="content-container">
            <MenuCard :dishes="desertDishes" sectiontitle="DESERT" />
          </div>
        </section>

        <section class="parallax-section">
          <img
            src="~/assets/images/desert.jpg"
            alt="background"
            class="background" />
        </section>

        <section class="content-section">
          <div class="content-container">
            <MenuCard :dishes="drinks" sectiontitle="DRINKS" />
          </div>
        </section>

        <section class="parallax-section">
          <img
            src="~/assets/images/drinks.jpg"
            alt="background"
            class="background" />
        </section>

        <section class="last-content-section">
          <div class="last-content-container">
            <Footer />
          </div>
        </section>
      </div>
    </main>
  </NuxtLayout>
</template>

<style scoped></style>
