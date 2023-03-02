import moment from 'moment';
import { useState, useCallback, useMemo, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { TBookingStatus, TOpeningHour } from '../types';
import Availability from '../components/Availability';
import DoctorProfile from '../components/DoctorProfile';
import { getFilledSlots } from '../utils';
import Booking from '../components/Booking';
import { postBooking } from '../api';

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
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState<string>(TODAY);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [showBookingSection, setShowBookingSection] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bookingId, setBookingId] = useState<string>('');
  const [isBookingError, setIsBookingError] = useState<boolean>(false);

  const filledSlots = useMemo(() => getFilledSlots(doctorId), [doctorId]);

  const handleDateSelection = useCallback((date: string) => {
    setSelectedDate(date);
    setSelectedSlot('');
  }, []);

  const handleSlotSelection = useCallback((slot: string) => {
    setSelectedSlot(slot);
  }, []);

  const handleBooking = useCallback(() => {
    setShowBookingSection(true);
  }, []);

  const handleInputChange = useCallback((evt: SyntheticEvent) => {
    setUserName((evt.target as HTMLInputElement).value);
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    const booking = {
      doctorId,
      date: selectedDate,
      start: parseFloat(selectedSlot.split(':').join('.')),
      status: TBookingStatus.CONFIRM,
      name: userName,
    };
    try {
      const res = await postBooking(booking);
      setBookingId(res.id);
      setIsBookingError(false);
    } catch {
      setBookingId('');
      setIsBookingError(true);
    }

    setIsLoading(false);
  };

  const cancelSubmit = () => {
    navigate(-1);
  };

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
      {showBookingSection ? (
        <Booking
          userName={userName}
          handleInputChange={handleInputChange}
          date={selectedDate}
          start={selectedSlot}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          cancelSubmit={cancelSubmit}
          bookingId={bookingId}
          isBookingError={isBookingError}
        />
      ) : (
        <Availability
          selectedDate={selectedDate}
          handleDateSelection={handleDateSelection}
          openingHours={openingHours}
          selectedSlot={selectedSlot}
          handleSlotSelection={handleSlotSelection}
          filledSlots={filledSlots}
          handleBooking={handleBooking}
        />
      )}
    </div>
  );
}

export default DoctorDetails;
