import React from 'react';

interface ItemListProps {
  items: string[];
  selected: string[];
  onToggle: (item: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, selected, onToggle }) => (
  <ul className="max-h-[400px] overflow-y-auto mb-6">
    {items.map((item) => {
      const isChecked = selected.includes(item);
      return (
        <li key={item} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => onToggle(item)}
            className="accent-blue-600 w-4 h-4 mr-2"
            id={item}
          />
          <label
            htmlFor={item}
            className={`cursor-pointer ${isChecked ? 'text-blue-700 font-medium' : 'text-gray-700'} hover:underline`}
          >
            {item}
          </label>
        </li>
      );
    })}
  </ul>
);

export default ItemList;
