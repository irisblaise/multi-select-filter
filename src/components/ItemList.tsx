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
        <li key={item} className="flex items-center mb-2 relative">
          <span className="relative inline-flex items-center justify-center w-6 h-6 mr-2 align-middle">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => onToggle(item)}
              id={item}
              className="appearance-none w-5 h-5 border-2 border-gray-300 bg-white checked:bg-white focus:outline-none align-middle"
            />
            {isChecked && (
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="block w-3 h-3 bg-blue-600"></span>
              </span>
            )}
          </span>
          <label
            htmlFor={item}
            className={`cursor-pointer ${isChecked ? 'text-blue-700' : 'text-gray-700'} hover:underline ml-1`}
            style={{ lineHeight: '1.5', userSelect: 'none' }}
          >
            {item}
          </label>
        </li>
      );
    })}
  </ul>
);

export default ItemList;
