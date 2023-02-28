import { memo } from 'react';

interface IDoctorProfileProps {
  name: string;
  description: string;
  line1: string;
  line2: string;
  district: string;
}

const DoctorProfile = memo(
  ({ name, description, line1, line2, district }: IDoctorProfileProps) => (
    <>
      <h5>{name}</h5>
      <span>{description}</span>
      <p>
        <span>Address : </span>
        <span>{line1}, </span>
        <span>{line2}, </span>
        <span>{district}</span>
      </p>
    </>
  )
);

export default DoctorProfile;
