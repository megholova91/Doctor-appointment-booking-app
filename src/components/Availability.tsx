import { memo } from 'react';
import moment from 'moment';
import { TFilledSlot, TOpeningHour } from '../types';

import SlotsSection from './SlotsSection';
import Dates from './Dates';

interface IAvailabilityProps {
  selectedDate: string;
  handleDateSelection: (date: string) => void;
  openingHours: TOpeningHour[];
  selectedSlot: string;
  handleSlotSelection: (slot: string) => void;
  filledSlots: TFilledSlot;
  handleBooking: () => void;
}

const Availability = memo(
  ({
    selectedDate,
    handleDateSelection,
    openingHours,
    selectedSlot,
    handleSlotSelection,
    filledSlots,
    handleBooking,
  }: IAvailabilityProps) => {
    const unavailableSlots = filledSlots[selectedDate] ?? [];
    return (
      <>
        <div className="d-flex flex-column mb-3">
          <h5 className="text-center mb-3">Available Slots</h5>
          <Dates
            handleDateSelection={handleDateSelection}
            selectedDate={selectedDate}
          />
          <hr />
          <div className="text-center fs-5">{`Slots for ${moment(
            selectedDate
          ).format('DD MMM')}`}</div>
          <SlotsSection
            openingHours={openingHours}
            day={moment(selectedDate).format('ddd')}
            handleClick={handleSlotSelection}
            selectedSlot={selectedSlot}
            filledSlots={unavailableSlots}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          disabled={!selectedSlot}
          onClick={handleBooking}
        >
          Proceed to booking
        </button>
      </>
    );
  }
);

export default Availability;
