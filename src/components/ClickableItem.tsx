import { memo, useCallback } from 'react';

interface IClickableItemProps<T> {
  item: T;
  handleItemClick: (item: T) => void;
  formattedItem?: T;
  isSelectedItem?: boolean;
  isDisabled?: boolean;
}

const ClickableItem = memo(
  ({
    item,
    handleItemClick,
    formattedItem,
    isSelectedItem,
    isDisabled,
  }: IClickableItemProps<string>) => {
    const handleClick = useCallback(() => {
      handleItemClick(item);
    }, [handleItemClick, item]);

    return (
      <button
        type="button"
        className={`btn btn-outline-info m-1 clickableItem ${
          isSelectedItem ? 'btn-info selectedTag' : ''
        }`}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {formattedItem || item}
      </button>
    );
  }
);

export default ClickableItem;
