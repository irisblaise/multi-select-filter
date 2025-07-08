import { useEffect, useState } from 'react';
import { gqlClient } from '../graphql/client';
import { GET_ITEMS } from '../graphql/queries';
import MultiSelect from '../components/MultiSelect';
import SearchInput from '../components/SearchInput';
import ItemList from '../components/ItemList';


const Home = () => {
  const [items, setItems] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gqlClient.request<{ items: string[] }>(GET_ITEMS)
      .then((data) => {
        setItems(data.items);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredItems = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));

  const handleToggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <MultiSelect>
        <SearchInput value={search} onChange={setSearch} />
        <ItemList items={filteredItems} selected={selected} onToggle={handleToggle} />
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
