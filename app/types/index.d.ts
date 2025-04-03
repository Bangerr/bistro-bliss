/* eslint-disable no-unused-vars */

type Dish = {
  title: string;
  description: string;
  price: string | number;
};

declare type ReservationFormSchema = {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  reservationDate: string;
  reservationTime: string;
  guests: string;
};
