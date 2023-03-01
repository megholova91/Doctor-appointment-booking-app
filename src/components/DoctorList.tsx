import { memo } from 'react';

import { TDoctor } from '../types';
import DoctorCard from './DoctorCard';

interface IDoctorListProps {
  doctorList: TDoctor[];
}

const DoctorList = memo(({ doctorList }: IDoctorListProps) => (
  <div className="container d-flex flex-column mt-3 mb-3">
    <h3 className="text-center">Available doctors</h3>
    <div className="d-flex justify-content-between flex-wrap">
      {doctorList.map((doctor) => {
        const {
          id,
          name,
          description,
          address,
          opening_hours: openingHours,
        } = doctor;
        return (
          <DoctorCard
            key={id}
            id={id}
            name={name}
            description={description}
            address={address}
            opening_hours={openingHours}
          />
        );
      })}
    </div>
  </div>
));

export default DoctorList;
