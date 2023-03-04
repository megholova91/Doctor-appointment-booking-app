import { BOOKING_SUCCESS_MESSAGE } from '../constants';

interface IBookingConfirmProps {
  bookingId: string;
}

function BookingConfirm({ bookingId }: IBookingConfirmProps) {
  return (
    <div className="d-flex flex-column">
      <h5>{BOOKING_SUCCESS_MESSAGE}</h5>
      <span>
        Your booking ID is <b>{bookingId}.</b> Please save this ID for future
        modifications to your booking!
      </span>
    </div>
  );
}

export default BookingConfirm;
