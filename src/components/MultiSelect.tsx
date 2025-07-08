import React from 'react';

interface MultiSelectProps {
  children: React.ReactNode;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ children }) => (
  <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 w-80">
    <h2 className="text-lg font-medium mb-4">Productgroep</h2>
    {children}
  </div>
);

export default MultiSelect;
