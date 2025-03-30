<script setup lang="ts">
import { computed } from "vue";

type Dish = {
  title: string;
  description: string;
  price: string | number;
};

const props = defineProps<{
  sectiontitle: string;
  dishes: Dish[];
}>();

// Split the dishes into 8 dishes per slide
const dishSlides = computed(() => {
  const slides = [];
  const dishesPerSlide = 8;
  for (let i = 0; i < props.dishes.length; i += dishesPerSlide) {
    slides.push(props.dishes.slice(i, i + dishesPerSlide));
  }
  return slides;
});
</script>

<template>
  <div class="menu-section">
    <div class="menu-section-title">
      <div class="infinity"></div>
      <h2>{{ props.sectiontitle }}</h2>
      <div class="infinity"></div>
    </div>

    <UCarousel
      v-slot="{ item: slideDishes }"
      :items="dishSlides"
      arrows
      :prev="{
        icon: 'i-heroicons-outline-chevron-left',
        color: 'neutral',
        variant: 'ghost',
      }"
      :next="{
        icon: 'i-heroicons-outline-chevron-right',
        color: 'neutral',
        variant: 'ghost',
      }"
      :ui="{
        item: 'basis-full',
        container: 'rounded-lg',
      }">
      <div class="slide-content">
        <div class="column">
          <div
            v-for="(dish, index) in slideDishes.slice(0, 4)"
            :key="`col1-${index}`"
            class="dish">
            <div class="dish-details">
              <h3>{{ dish.title }}</h3>
              <p>{{ dish.price }}€</p>
            </div>
            <div class="dish-description">
              <p>{{ dish.description }}</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div
            v-for="(dish, index) in slideDishes.slice(4, 8)"
            :key="`col2-${index}`"
            class="dish">
            <div class="dish-details">
              <h3>{{ dish.title }}</h3>
              <p>{{ dish.price }}€</p>
            </div>
            <div class="dish-description">
              <p>{{ dish.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </UCarousel>
  </div>
</template>

<style scoped>
.menu-section {
  padding: 20px 40px;
  color: white;
  position: relative;
}

.menu-section-title {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 75px;
}

.menu-section-title h2 {
  color: #b29771;
  font-size: 20pt;
  letter-spacing: 15%;
  white-space: nowrap;
}

.slide-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 75px;
  min-height: 480px;
}

.column {
  display: flex;
  flex-direction: column;
  width: 48%;
  gap: 20px;
}

.dish {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: center;
  gap: 5px;
  height: 120px;
}

.dish-details {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  color: #b29771;
}

.dish-details h3 {
  margin: 0;
  text-align: left;
  letter-spacing: 10%;
}

.dish-details p {
  margin: 0;
  white-space: nowrap;
  text-align: right;
  font-weight: 600;
}

.dish-description {
  width: 75%;
  text-align: left;
  color: #ccc;
}

@media only screen and (max-width: 768px) {
  .slide-content {
    flex-direction: column;
    align-items: center;
    min-height: auto;
  }

  .column {
    width: 90%;
  }

  .menu-section-title h2 {
    font-size: 16pt;
  }

  .dish-details {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .dish-details h3,
  .dish-details p {
    text-align: center;
    width: 100%;
  }

  .dish-description {
    text-align: center;
  }
}
</style>
