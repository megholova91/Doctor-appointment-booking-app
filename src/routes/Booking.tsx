import { SyntheticEvent, memo, useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import DoctorProfile from '../components/DoctorProfile';
import { postBooking } from '../api';
import Loader from '../components/Loader';
import BookingConfirm from '../components/BookingConfirm';

const Booking = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingDetails, doctorDetails } = location.state;
  const { date, start, status } = bookingDetails;
  const { doctorId, name, description, line1, line2, district } = doctorDetails;

  const [userName, setUserName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bookingId, setBookingId] = useState<string>('');
  const [isBookingError, setIsBookingError] = useState<boolean>(false);

  const handleInputChange = useCallback((evt: SyntheticEvent) => {
    setUserName((evt.target as HTMLInputElement).value);
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    const booking = {
      doctorId,
      date,
      start: parseFloat(start.split(':').join('.')),
      status,
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
      <span>
        Your appointment is on {moment(date).format('DD MMM YYYY')} at {start}{' '}
        hrs
      </span>
      <br />
      {bookingId && <BookingConfirm bookingId={bookingId} />}
      {isBookingError && (
        <span>
          Some error occurred while booking your appointment! Please try after
          sometime
        </span>
      )}
      {!bookingId && !isBookingError && (
        <>
          <p>Enter your name to proceed with the booking</p>
          <label htmlFor="username">
            <input
              id="username"
              type="text"
              className="input"
              value={userName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <div className="d-flex justify-content-end align-items-center">
            <button
              type="button"
              className="btn btn-outline-danger m-3"
              onClick={cancelSubmit}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary fixWidthButton"
              onClick={handleSubmit}
              disabled={isLoading || !userName}
            >
              {isLoading ? <Loader /> : 'Confirm booking'}
            </button>
          </div>
        </>
      )}
    </div>
  );
});

export default Booking;
