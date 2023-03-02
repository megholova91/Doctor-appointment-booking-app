import { memo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import DoctorDetails from '../pages/DoctorDetails';
import { TDoctor } from '../types';

const Doctor = memo(() => {
  const location = useLocation();
  const { doctorId } = useParams();
  let doctor;
  if (!location.state) {
    const doctors = JSON.parse(localStorage.getItem('doctors') as string);
    doctor = doctors.find((d: TDoctor) => d.id === doctorId);
  } else {
    doctor = location.state.doctor;
  }
  const {
    id,
    name,
    description,
    address,
    opening_hours: openingHours,
  } = doctor;
  const { line_1: line1, line_2: line2, district } = address;

  return (
    <DoctorDetails
      doctorId={id}
      name={name}
      description={description}
      line1={line1}
      line2={line2}
      district={district}
      openingHours={openingHours}
    />
  );
});

export default Doctor;
