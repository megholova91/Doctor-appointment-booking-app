import axios from 'axios';
import { TBooking } from './types';
import { API_ENDPOINT, CONFIG } from './constants';

export async function getDoctorList() {
  try {
    const response = await axios.get(`${API_ENDPOINT}doctor`, CONFIG);
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function getDoctor(doctorId: string) {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}doctor/${doctorId}`,
      CONFIG
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function getBookingList() {
  try {
    const response = await axios.get(`${API_ENDPOINT}booking`, CONFIG);
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function postBooking(booking: TBooking) {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}booking`,
      booking,
      CONFIG
    );
    return response.data;
  } catch (err) {
    return err;
  }
}
