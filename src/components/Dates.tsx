import { memo, useCallback } from 'react';
import { formatDate, getWeekDates } from '../utils';
import ClickableItem from './ClickableItem';

interface IDatesProps {
  selectedDate: string;
  handleDateSelection: (date: string) => void;
}

const Dates = memo(({ selectedDate, handleDateSelection }: IDatesProps) => {
  const dates = getWeekDates();

  const handleDateClick = useCallback(
    (date: string) => {
      handleDateSelection(date);
    },
    [handleDateSelection]
  );

  return (
    <div className="d-flex flex-wrap">
      {dates.map((date) => {
        const formattedDate = formatDate(date);
        return (
          <ClickableItem
            key={date}
            item={date}
            formattedItem={formattedDate}
            handleItemClick={handleDateClick}
            isSelectedItem={date === selectedDate}
          />
        );
      })}
    </div>
  );
});

export default Dates;
