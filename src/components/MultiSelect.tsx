import React, { useEffect, useState } from 'react';
import { gqlClient } from '../graphql/client';
import { GET_ITEMS } from '../graphql/queries';
import SearchInput from './SearchInput';
import ItemList from './ItemList';
import { decodeHtmlEntities } from '../utils/decodeHtmlEntities';

interface MultiSelectProps {
  onApply?: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ onApply }) => {
  const [items, setItems] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    gqlClient.request<{ items: string[] }>(GET_ITEMS).then((data) => {
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
      } else {
        return [item, ...prev];
      }
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 min-w-[370px] min-h-[540px] max-h-[540px] flex flex-col shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-left leading-tight w-full">
        Productgroep
      </h2>

      <SearchInput value={search} onChange={setSearch} />

      <div className="flex-1 overflow-y-auto space-y-2 px-1 my-3">
        <ItemList items={sortedItems} selected={selected} onToggle={handleToggle} />
      </div>

      <button
        className="w-full py-3 bg-blue-700 text-white text-lg font-medium rounded-lg hover:bg-blue-500 transition-colors"
        onClick={() => onApply && onApply(selected)}
      >
        Toepassen
      </button>
    </div>
  );
};

export default MultiSelect;
