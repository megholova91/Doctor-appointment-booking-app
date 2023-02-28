import { memo, useState, useEffect } from 'react';
import { TOpeningHour, TDay } from '../types';
import { getOpeningHourForDay } from '../utils';
import Slots from './Slots';

interface ISlotsSectionProps {
  openingHours: TOpeningHour[];
  day: string;
  handleClick: (slot: string) => void;
  selectedSlot: string;
  filledSlots: number[];
}

const SlotsSection = memo(
  ({
    openingHours,
    day,
    handleClick,
    selectedSlot,
    filledSlots,
  }: ISlotsSectionProps) => {
    const [openingHour, setOpeningHour] = useState<TOpeningHour | undefined>(
      undefined
    );

    useEffect(() => {
      const currentOpeningHour = getOpeningHourForDay(
        day.toUpperCase() as unknown as TDay,
        openingHours
      );
      setOpeningHour(currentOpeningHour);
    }, [day, openingHours]);

    return (
      <Slots
        start={openingHour?.start}
        end={openingHour?.end}
        handleClick={handleClick}
        selectedSlot={selectedSlot}
        filledSlots={filledSlots}
      />
    );
  }
);

export default SlotsSection;
