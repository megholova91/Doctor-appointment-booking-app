import { SyntheticEvent, memo } from 'react';
import moment from 'moment';
import Loader from './Loader';
import BookingConfirm from './BookingConfirm';
import { BOOKING_ERROR_MESSAGE } from '../constants';

interface IBookingProps {
  userName: string;
  handleInputChange: (evt: SyntheticEvent) => void;
  date: string;
  start: string;
  isLoading: boolean;
  handleSubmit: () => void;
  cancelSubmit: () => void;
  bookingId: string;
  isBookingError: boolean;
}

const Booking = memo(
  ({
    userName,
    handleInputChange,
    date,
    start,
    isLoading,
    handleSubmit,
    cancelSubmit,
    bookingId,
    isBookingError,
  }: IBookingProps) => (
    <div className="d-flex flex-column mb-3">
      <span>
        Your appointment is on {moment(date).format('DD MMM YYYY')} at {start}{' '}
        hrs
      </span>
      <br />
      {bookingId && <BookingConfirm bookingId={bookingId} />}
      {isBookingError && <span>{BOOKING_ERROR_MESSAGE}</span>}
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
  )
);

export default Booking;
