<script setup lang="ts">
const layout = "contact";
</script>

<template>
  <NuxtLayout :name="layout">
    <main class="contact-main">
      <h1 class="page-title">Get In Touch</h1>

      <!-- Contact Details Section (Always shown now) -->
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
  margin: 100px auto; /* Added top/bottom margin */
  padding: 50px; /* Added padding */
  color: #ccc; /* Default text color */
  border-radius: 8px; /* Optional: adds rounded corners */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Optional: adds subtle shadow */
}

.page-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  color: #b29771;
  margin-bottom: 50px;
  font-family: "Montserrat", sans-serif;
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
  font-family: "Montserrat", sans-serif;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  text-align: left;
}

.detail-item {
  background-color: rgba(255, 255, 255, 0.05); /* Slightly lighter background */
  padding: 25px;
  border-radius: 5px;
}

.detail-item h3 {
  font-size: 1.4rem;
  color: #b29771;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px; /* Space between icon and text */
  font-family: "Montserrat", sans-serif;
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

/* Reservation & Maps Section */
.reservation-maps-section {
  padding: 50px 0; /* Adjusted padding */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: 100px; Removed margin-top, spacing handled by sections */
  gap: 50px;
  min-height: fit-content;
}

/* Added column wrappers */
.reservation-column,
.map-column {
  flex: 1; /* Allow columns to grow */
  min-width: 300px; /* Minimum width before wrapping */
}

.reservation-column h2,
.map-column h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 25px; /* Space below heading */
  font-family: "Montserrat", sans-serif;
}

/* Removed direct h1 styling for this section as it's handled by column h2 */
/* .reservation-maps-section h1 { ... } */

@media only screen and (max-width: 1200px) {
  /* Adjusted breakpoint for better responsiveness */
  .contact-main {
    width: 90%;
    padding: 40px;
  }
}

@media only screen and (max-width: 992px) {
  /* Medium screens */
  .reservation-maps-section {
    flex-direction: column;
    gap: 60px; /* Increased gap when stacked */
  }
  .reservation-column,
  .map-column {
    min-width: 100%; /* Full width when stacked */
  }
}

@media only screen and (max-width: 768px) {
  .contact-main {
    width: 100%;
    margin: 50px auto; /* Reduced margin */
    padding: 30px 20px; /* Reduced padding */
    border-radius: 0; /* Remove radius on small screens */
    box-shadow: none; /* Remove shadow */
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
    grid-template-columns: 1fr; /* Stack details vertically */
    gap: 20px;
  }

  .detail-item h3 {
    font-size: 1.3rem;
  }

  .reservation-maps-section {
    /* width: 100%; */ /* Already handled by column */
    padding: 0 0; /* Adjusted padding */
    /* flex-direction: column; */ /* Already handled by 992px breakpoint */
    gap: 40px; /* Adjusted gap */
    /* margin-bottom: 50px; */ /* Removed, spacing handled by sections */
  }

  .reservation-column h2,
  .map-column h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
}
</style>
