import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => (
  <div className="mb-4 flex items-center bg-white border border-gray-300 rounded px-3 py-2">
    <input
      type="text"
      className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
      placeholder="Zoek op ..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <img
      src="/src/assets/search.svg"
      alt="search"
      className="w-5 h-5 text-gray-400 ml-2"
    />
  </div>
);

export default SearchInput;
