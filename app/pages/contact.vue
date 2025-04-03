<script setup lang="ts">
const layout = "contact";
</script>

<template>
  <NuxtLayout :name="layout">
    <main class="contact-main">
      <h1 class="page-title">Get In Touch</h1>

      <section class="contact-info-section">
        <h2>Our Details</h2>
        <div class="details-grid">
          <div class="detail-item">
            <h3><Icon name="mdi:map-marker-outline" /> Address</h3>
            <p>Via Roma 21, Ortisei 39042, BZ</p>
          </div>
          <div class="detail-item">
            <h3><Icon name="mdi:phone-outline" /> Contact</h3>
            <p><a href="tel:+390123456789">+39 0123 456789</a></p>
            <p>
              <a href="mailto:info@bistrobliss.com">info@bistrobliss.com</a>
            </p>
          </div>
          <div class="detail-item">
            <h3><Icon name="mdi:clock-time-four-outline" /> Opening Hours</h3>
            <p>Mon - Fri: 10:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </section>

      <!-- Reservation & Map Section -->
      <section class="reservation-maps-section">
        <div class="reservation-column">
          <h2>Make a Reservation</h2>
          <ReservationForm />
        </div>
        <div class="map-column">
          <h2>Find Us</h2>
          <GoogleMaps />
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>

<style scoped>
.contact-main {
  background-color: #0b1315;
  width: 80%;
  margin: 100px auto;
  padding: 50px;
  color: #ccc;
  border-radius: 8px;
}

.page-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  color: #b29771;
  margin-bottom: 50px;
  font-family: "Cormorant Garamond", sans-serif;
}

/* Contact Info Section */
.contact-info-section {
  margin-bottom: 60px;
  text-align: center;
}

.contact-info-section h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 30px;
  font-family: "Cormorant Garamond", sans-serif;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  text-align: left;
}

.detail-item {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 5px;
}

.detail-item h3 {
  font-size: 1.4rem;
  color: #b29771;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Cormorant Garamond", sans-serif;
}

.detail-item p {
  margin-bottom: 8px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.detail-item a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.detail-item a:hover {
  color: #fff;
}

.reservation-maps-section {
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  min-height: fit-content;
}

.reservation-column,
.map-column {
  flex: 1;
  min-width: 300px;
}

.reservation-column h2,
.map-column h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 25px;
  font-family: "Cormorant Garamond", sans-serif;
}

@media only screen and (max-width: 1200px) {
  .contact-main {
    width: 90%;
    padding: 40px;
  }
}

@media only screen and (max-width: 992px) {
  .reservation-maps-section {
    flex-direction: column;
    gap: 60px;
  }
  .reservation-column,
  .map-column {
    min-width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .contact-main {
    width: 100%;
    margin: 50px auto;
    padding: 30px 20px;
    border-radius: 0;
    box-shadow: none;
  }

  .page-title {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }

  .contact-info-section {
    margin-bottom: 40px;
  }

  .contact-info-section h2 {
    font-size: 1.8rem;
  }

  .details-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .detail-item h3 {
    font-size: 1.3rem;
  }

  .reservation-maps-section {
    padding: 0 0;
    gap: 40px;
  }

  .reservation-column h2,
  .map-column h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
}
</style>
