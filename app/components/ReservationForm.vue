<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { reservationSchema } from "~/utils/index";

// type Schema = z.output<typeof reservationSchema>;

const toast = useToast();
async function handleSubmit(event: FormSubmitEvent<ReservationFormSchema>) {
  const formData = new FormData(event.currentTarget as HTMLFormElement);
  const res = await fetch("/api/send-reservation", {
    method: "POST",
    body: JSON.stringify({
      firstname: formData.get("firstName"),
      lastname: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      reservationDate: formData.get("reservationDate"),
      reservationTime: formData.get("reservationTime"),
      guests: formData.get("guests"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    toast.add({
      title: "Success",
      description: "Reservation confirmed.",
      color: "success",
    });

    window.location.reload();
  } else {
    toast.add({
      title: "Error",
      description: "Reservation failed.",
      color: "error",
    });
  }
}
</script>

<template>
  <form
    method="POST"
    class="reservation-form-container"
    @submit.prevent="handleSubmit">
    <h1>Reserve a Table</h1>
    <div class="input-column">
      <label>Full name <span>*</span></label>
      <div class="name-inputs-container">
        <div class="input-wrapper first-name-wrapper">
          <input
            type="text"
            placeholder="Steve"
            class="input-firstName"
            name="firstName"
            required />
        </div>
        <div class="input-wrapper last-name-wrapper">
          <input
            type="text"
            placeholder="Wonder"
            class="input-lastName"
            name="lastName"
            required />
        </div>
      </div>
    </div>

    <div class="input-column input-email">
      <label>Email</label>
      <input type="text" placeholder="Email" name="email" />
    </div>

    <div class="input-column">
      <label>Phone Number <span>*</span></label>
      <input
        type="tel"
        maxlength="12"
        placeholder="123-456-7890"
        name="phone"
        required />
    </div>

    <div class="input-reservation-date-time">
      <div class="input-column input-reservation-date">
        <label>Reservation Date <span>*</span></label>
        <input
          type="date"
          id="start"
          value="{{localDate}}"
          max="2025-12-31"
          placeholder="01.01.2025"
          name="reservationDate"
          required />
      </div>
      <div class="input-column input-reservation-time">
        <label>Reservation Time <span>*</span></label>
        <input
          type="time"
          id="appointment"
          min="09:00"
          max="18:00"
          placeholder="02:00 PM"
          name="reservationTime"
          required />
      </div>
    </div>

    <div class="input-guests-submit">
      <div class="input-column">
        <label>Guests <span>*</span></label>
        <input
          type="text"
          placeholder="2"
          class="input-guests"
          name="guests"
          required />
      </div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<style scoped>
.reservation-form-container {
  width: 100%;
  min-height: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.reservation-form-container h1 {
  font-family: "Montserrat";
  font-size: 1.5rem;
  font-weight: 600;
  color: #b29771;
  letter-spacing: 10%;
}

.input-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-email {
  margin-top: 20px;
}

input {
  border-radius: 5px;
  border-bottom: 1px solid #767676;
  width: 100%;
}

input:focus {
  outline: none;
}

label {
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
}

label span {
  color: #6b5151;
  font-size: 1.2rem;
  margin-left: 5px;
  padding-left: 5px;
}
.name-inputs-container {
  width: 100%;
  display: flex;
  gap: 20px;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.first-name-wrapper::after {
  content: "First Name";
  position: absolute;
  bottom: -20px;
  left: 0;
  color: #767676;
  font-size: 0.8rem;
  font-weight: 400;
}

.last-name-wrapper::after {
  content: "Last name";
  position: absolute;
  bottom: -20px;
  left: 0;
  color: #767676;
  font-size: 0.8rem;
  font-weight: 400;
}

.input-reservation-date-time {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
}

.input-reservation-date,
.input-reservation-time {
  width: 50%;
}

.input-guests-submit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.input-guests {
  max-width: 50px;
  border: 1px solid #767676 !important;
  text-align: center;
}

.input-guests-submit button {
  padding: 5px 20px;
  border: 1px solid #767676;
  border-radius: 5px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .reservation-form-container {
    width: 100%;
    padding: 20px;
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.5);
  }
  .reservation-form-container h1 {
    text-align: center;
    margin: 25px 0;
  }
}
</style>
