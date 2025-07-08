import React from 'react';

interface SelectedItemsProps {
  selected: string[];
  onRemove: (item: string) => void;
}

const SelectedItems: React.FC<SelectedItemsProps> = ({ selected, onRemove }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {selected.map((item) => (
      <span
        key={item}
        className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm"
      >
        {item}
        <button
          className="ml-1 text-blue-600 hover:text-blue-800 focus:outline-none"
          onClick={() => onRemove(item)}
          aria-label={`Remove ${item}`}
        >
          &times;
        </button>
      </span>
    ))}
  </div>
);

export default SelectedItems;
