import moment from 'moment';
import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOpeningHour } from '../types';
import Availability from './Availability';
import DoctorProfile from './DoctorProfile';
import { getFilledSlots } from '../utils';

const TODAY = moment().format('YYYY-MM-DD');

interface TDoctorDetailsProps {
  doctorId: string;
  name: string;
  description: string;
  line1: string;
  line2: string;
  district: string;
  openingHours: TOpeningHour[];
}

function DoctorDetails({
  doctorId,
  name,
  description,
  line1,
  line2,
  district,
  openingHours,
}: TDoctorDetailsProps) {
  const [selectedDate, setSelectedDate] = useState<string>(TODAY);
  const [selectedSlot, setSelectedSlot] = useState<string>('');

  const navigate = useNavigate();
  const filledSlots = useMemo(() => getFilledSlots(doctorId), [doctorId]);

  const handleDateSelection = useCallback((date: string) => {
    setSelectedDate(date);
    setSelectedSlot('');
  }, []);

  const handleSlotSelection = useCallback((slot: string) => {
    setSelectedSlot(slot);
  }, []);

  const handleBooking = useCallback(() => {
    navigate(`booking`, {
      state: {
        bookingDetails: {
          date: selectedDate,
          start: selectedSlot,
          status: 'confirmed',
        },
        doctorDetails: {
          doctorId,
          name,
          description,
          line1,
          line2,
          district,
        },
      },
    });
  }, [
    description,
    district,
    doctorId,
    line1,
    line2,
    name,
    navigate,
    selectedDate,
    selectedSlot,
  ]);

  return (
    <div className="container d-flex flex-column mt-3 mb-3">
      <DoctorProfile
        name={name}
        description={description}
        line1={line1}
        line2={line2}
        district={district}
      />
      <hr />
      <Availability
        selectedDate={selectedDate}
        handleDateSelection={handleDateSelection}
        openingHours={openingHours}
        selectedSlot={selectedSlot}
        handleSlotSelection={handleSlotSelection}
        filledSlots={filledSlots}
      />
      <button
        type="button"
        className="btn btn-primary"
        disabled={!selectedSlot}
        onClick={handleBooking}
      >
        Proceed to booking
      </button>
      <br />
    </div>
  );
}

export default DoctorDetails;
