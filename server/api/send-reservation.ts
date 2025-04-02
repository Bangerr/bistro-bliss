import { Resend } from "resend";

const resend = new Resend(process.env.NUXT_RESEND_API_KEY);
const toEmail = process.env.NUXT_RESEND_TO_EMAIL;

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const htmlContent = `
      <h1>New Reservation</h1>
      <p><strong>Name:</strong> ${body.firstname} ${body.lastname}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Date:</strong> ${body.reservationDate}</p>
      <p><strong>Time:</strong> ${body.reservationTime}</p>
      <p><strong>Guests:</strong> ${body.guests}</p>
    `;

    const data = await resend.emails.send({
      from: "New Reservation <onboarding@resend.dev>",
      to: [toEmail as string],
      subject: "New Reservation Received",
      html: htmlContent,
    });

    return { data };
  } catch (error) {
    return { error };
  }
});
