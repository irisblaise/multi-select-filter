import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-600" role="navigation" aria-label="Hoofdnavigatie">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src="bol.png" alt="Bol.com" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
