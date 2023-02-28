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
}

const Availability = memo(
  ({
    selectedDate,
    handleDateSelection,
    openingHours,
    selectedSlot,
    handleSlotSelection,
    filledSlots,
  }: IAvailabilityProps) => {
    const unavailableSlots = filledSlots[selectedDate] ?? [];
    return (
      <div className="d-flex flex-column mb-3">
        <h6>Available Slots</h6>
        <Dates
          handleDateSelection={handleDateSelection}
          selectedDate={selectedDate}
        />
        <br />
        <div className="text-center text-info fs-5">{`Slots for ${moment(
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
    );
  }
);

export default Availability;
