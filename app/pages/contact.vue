<script setup lang="ts">
// Import the image directly
import contactBackground from "~/assets/images/bistro2.jpg";
</script>

<template>
  <NuxtLayout :bg-image="contactBackground">
    <main>
      <section class="container py-20">
        <h1 class="text-6xl font-extrabold mb-6 text-balance text-white">
          Contact Us
        </h1>
        <p class="text-xl mb-6 text-balance max-w-screen-lg text-white">
          Get in touch with us to reserve your table or for any inquiries.
        </p>
      </section>
    </main>
  </NuxtLayout>
</template>
