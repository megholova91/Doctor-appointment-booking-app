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
    <div className="container">
      <h4>Doctor details</h4>
      <h5>{name}</h5>
      <span>{description}</span>
      <p>
        <span>Address : </span>
        <span>{line1}, </span>
        <span>{line2}, </span>
        <span>{district}</span>
      </p>
    </div>
  )
);

export default DoctorProfile;
