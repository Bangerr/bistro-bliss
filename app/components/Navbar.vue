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
          <a href="/" class="nav-link-item">Home</a>
        </li>
      </div>
      <li>
        <a href="/menu" class="nav-link-item">Menu</a>
      </li>
      <li>
        <a href="/about" class="nav-link-item">About</a>
      </li>
      <li>
        <a href="/contact" class="nav-link-item">Contact</a>
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
  gap: 1.2rem;
  align-items: center;
}
</style>
