import axios from 'axios';
import { TBooking } from './types';

const API_ENDPOINT = 'https://bowtie-fe-assignment-api.onrender.com/';
const API_KEY = '018ec67a-20a7-4fb6-bb02-4a4c3115dea0';

const config = {
  headers: {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
  },
};

export async function getDoctorList() {
  try {
    const response = await axios.get(`${API_ENDPOINT}doctor`, config);
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function getDoctor(doctorId: string) {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}doctor/${doctorId}`,
      config
    );
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function getBookingList() {
  try {
    const response = await axios.get(`${API_ENDPOINT}booking`, config);
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
      config
    );
    return response.data;
  } catch (err) {
    return err;
  }
}
