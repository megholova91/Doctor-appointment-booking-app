import { useEffect, memo, useState } from 'react';
import { getBookingList, getDoctorList } from '../api';
import { TDoctor } from '../types';
import DoctorList from '../components/DoctorList';

const Doctor = memo(() => {
  const [doctors, setDoctors] = useState<TDoctor[]>([]);

  useEffect(() => {
    async function fetchDoctors() {
      const resp = await getDoctorList();
      localStorage.setItem('doctors', JSON.stringify(resp));
      setDoctors(resp);
    }

    const cachedDoctors = localStorage.getItem('doctors');
    if (cachedDoctors) {
      setDoctors(JSON.parse(cachedDoctors));
    } else {
      fetchDoctors();
    }
  }, []);

  useEffect(() => {
    async function fetchBookings() {
      const resp = await getBookingList();
      localStorage.setItem('bookings', JSON.stringify(resp));
    }
    fetchBookings();
  }, []);

  return <DoctorList doctorList={doctors} />;
});

export default Doctor;
