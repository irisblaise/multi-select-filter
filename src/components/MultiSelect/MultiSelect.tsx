import React, { useEffect, useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import { gqlClient } from '../../graphql/client';
import { GET_CATEGORIES } from '../../graphql/queries';
import ItemList from '../ItemList/ItemList';
import { decodeHtmlEntities } from '../../utils/decodeHtmlEntities';

interface MultiSelectProps {
  onApply?: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ onApply }) => {
  const [items, setItems] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    gqlClient.request<{ items: string[] }>(GET_CATEGORIES).then((data) => {
      setItems(data.items.map(decodeHtmlEntities));
    });
  }, []);

  const selectedFiltered = selected;
  const unselectedFiltered = items.filter(
    (item) => !selected.includes(item) && item.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedItems = [...selectedFiltered, ...unselectedFiltered];

  const handleToggle = (item: string) => {
    setSelected((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item);
      }
      return [item, ...prev];
    });
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl p-6 min-h-[540px] max-h-[540px] flex flex-col shadow-sm"
      role="region"
      aria-label="Productgroep filter"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-left leading-tight w-full">
        Productgroep
      </h2>

      <SearchInput value={search} onChange={setSearch} />

      <div className="flex-1 overflow-y-auto space-y-2 px-1 my-3">
        <ItemList items={sortedItems} selected={selected} onToggle={handleToggle} />
      </div>

      <button
        type="button"
        className="w-full py-3 bg-blue-700 cursor-pointer text-white text-lg font-medium rounded-lg hover:bg-blue-500 transition-colors mb-2 disabled:bg-blue-200 disabled:cursor-not-allowed"
        onClick={() => onApply && onApply(selected)}
        disabled={selected.length === 0}
      >
        Toepassen
      </button>
      <button
        type="button"
        className="w-full py-2 bg-gray-200 cursor-pointer text-gray-700 text-base font-medium rounded-lg hover:bg-gray-300 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
        onClick={() => {
          setSelected([]);
          setSearch('');
          if (onApply) onApply([]);
        }}
        aria-label="Selectie wissen"
        disabled={selected.length === 0}
      >
        Selectie wissen
      </button>
    </div>
  );
};

export default MultiSelect;
