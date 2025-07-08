import React from 'react';
import searchIcon from '/src/assets/search.svg';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => (
  <div className="relative flex items-center w-full">
    <input
      type="text"
      className="w-full rounded-lg border border-gray-300 py-2 px-4 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
      placeholder="Zoek..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
      <img src={searchIcon} alt="search" className="w-5 h-5 text-gray-400" />
    </span>
  </div>
);

export default SearchInput;
