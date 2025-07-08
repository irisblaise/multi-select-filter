import { useEffect, useState } from 'react';
import { gqlClient } from '../graphql/client';
import { GET_ITEMS } from '../graphql/queries';
import MultiSelect from '../components/MultiSelect';
import SearchInput from '../components/SearchInput';
import ItemList from '../components/ItemList';
import { decodeHtmlEntities } from '../utils/decodeHtmlEntities';


const Home = () => {
  const [items, setItems] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gqlClient.request<{ items: string[] }>(GET_ITEMS)
      .then((data) => {
        setItems(data.items.map(decodeHtmlEntities));
      })
      .finally(() => setLoading(false));
  }, []);


  const selectedFiltered = selected;
  const unselectedFiltered = items.filter(
    item => !selected.includes(item) && item.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <MultiSelect>
        <SearchInput value={search} onChange={setSearch} />
        {selectedFiltered.length > 0 && (
          <div className="mb-2">
            <div className="text-xs text-gray-500 mb-1">Geselecteerd</div>
            <ItemList items={selectedFiltered} selected={selected} onToggle={handleToggle} />
          </div>
        )}
        <div>
          {selectedFiltered.length > 0 && (
            <div className="text-xs text-gray-500 mb-1">Overige opties</div>
          )}
          <ItemList items={unselectedFiltered} selected={selected} onToggle={handleToggle} />
        </div>
        <button
          className="w-full mt-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => {}}
        >
          Toepassen
        </button>
      </MultiSelect>
    </div>
  );
}

export default Home;
