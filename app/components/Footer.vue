<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Contact & Hours -->
      <div class="footer-column">
        <h4>CONTACT US</h4>
        <p>
          Via Roma 21, Ortisei 39042, BZ<br />
          <a href="tel:+390123456789">+39 0123 456789</a><br />
          <a href="mailto:info@bistrobliss.com">info@bistrobliss.com</a>
        </p>
        <h3>OPENING HOURS</h3>
        <p>
          Mon - Fri: 10:00 - 22:00<br />
          Sat - Sun: 10:00 - 23:00
        </p>
      </div>

      <!-- Quick Links -->
      <div class="footer-column">
        <h4>QUICK LINKS</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <!-- Socials & Reservation -->
      <div class="footer-column">
        <h4>SOCIALS</h4>
        <div class="social-links">
          <a href="/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <a href="/contact" class="reservation-link">Reservation</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        &copy; {{ new Date().getFullYear() }} Bistro Bliss. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: static;
  width: 100%;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  color: #ccc;
  margin-top: 30px;
  font-family: "Jost", sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 200px;
}

.footer-column h4 {
  font-family: "Cormorant Garamond", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: #b29771;
  letter-spacing: 10%;
}

.footer-column h3 {
  font-family: "Cormorant Garamond", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #b29771;
  letter-spacing: 10%;
}

.footer-column p,
li {
  margin-bottom: 10px;
  line-height: 1.5;
}

.footer-column a {
  color: #ccc;
  text-decoration: none;
}

.footer-column a:hover {
  color: #fff;
  transition: color 0.3s ease;
}

.social-links a {
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 10px;
}

.reservation-link {
  border: 1px solid #b29771;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  background-color: #b29771;
  width: fit-content;
}

.reservation-link:hover {
  color: #fff;
  background-color: #9e8665;
  transition: color 3s ease;
}
.footer-bottom {
  text-align: center;
  font-size: 0.8rem;
  color: #aaa;
  position: relative;
  padding-top: 15px;
  margin-bottom: 15px;
}

.footer-bottom::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #333;
  top: 0;
  left: 0;
  transform: translateY(0);
}

@media only screen and (max-width: 768px) {
  .footer {
    padding: 0 25px;
  }
  .footer-container {
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    align-items: center;
  }

  .footer-column {
    align-items: center;
    text-align: center;
    gap: 10px;
    width: 100%;
  }

  .footer-bottom {
    position: relative;
    margin-bottom: 15px;
  }

  .social-links {
    margin: 0 10px 10px 10px;
  }
}
</style>
