<script setup lang="ts"></script>

<template>
  <header class="navbar-header">
    <nav class="container nav-link">
      <div class="nav-items">
        <a href="/" class="nav-title-icon">
          <img
            class="nav-icon"
            src="../assets/images/bistro-logo.png"
            alt="Bistro Bliss" />
        </a>
        <li>
          <a href="/" class="text-white hover:text-[#f1d382]">Home</a>
        </li>
      </div>
      <li>
        <a href="/about" class="text-white hover:text-[#f1d382]">About</a>
      </li>
      <li>
        <a href="/contact" class="text-white hover:text-[#f1d382]">Contact</a>
      </li>
    </nav>
  </header>
</template>

<!-- Applies only to the current component-->
<style scoped>
.transparent {
  background-color: transparent;
}

.nav-items {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
