import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { TDoctor } from '../types';

const DoctorCard = memo(
  ({ id, name, description, address, opening_hours }: TDoctor) => {
    const navigate = useNavigate();
    const { line_1: line1, line_2: line2, district } = address;

    const handleClick = () => {
      navigate(`/${id}`, {
        state: {
          doctor: {
            id,
            name,
            description,
            address: {
              line_1: line1,
              line_2: line2,
              district,
            },
            opening_hours,
          },
        },
      });
    };

    return (
      <button
        type="button"
        className="card card-body m-3 doctorCard"
        onClick={handleClick}
      >
        <h5>{name}</h5>
        <span>{description}</span>
        <br />
        <p>
          <span>Address : </span>
          <span>{line1}, </span>
          <span>{line2}, </span>
          <span>{district}</span>
        </p>
      </button>
    );
  }
);

export default DoctorCard;
