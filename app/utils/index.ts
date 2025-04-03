import * as z from "zod";

export const reservationSchema = () =>
  z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.number().min(10),
    reservationDate: z.string(),
    reservationTime: z.string(),
    guests: z.number().min(1),
  });
