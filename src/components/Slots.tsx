import { memo, useState, useEffect } from 'react';
import { computeSlots } from '../utils';
import ClickableItem from './ClickableItem';

interface ISlotsProps {
  start: string | undefined;
  end: string | undefined;
  handleClick: (slot: string) => void;
  selectedSlot: string;
  filledSlots: number[];
}

const Slots = memo(
  ({ start, end, handleClick, selectedSlot, filledSlots }: ISlotsProps) => {
    const [slots, setSlots] = useState<string[]>([]);

    useEffect(() => {
      const currentSlots = computeSlots(start, end);
      setSlots(currentSlots);
      return () => setSlots([]);
    }, [start, end]);

    return (
      <div className="d-flex flex-wrap">
        {slots.length > 0 &&
          slots.map((slot) => {
            const slotInFloat = parseFloat(slot.split(':').join('.'));
            return (
              <ClickableItem
                key={slot}
                item={slot}
                handleItemClick={handleClick}
                isSelectedItem={selectedSlot === slot}
                isDisabled={filledSlots.indexOf(slotInFloat) > -1}
              />
            );
          })}
      </div>
    );
  }
);

export default Slots;
