import React from 'react';

interface SelectedOverviewProps {
  categories: string[];
}

const SelectedOverview: React.FC<SelectedOverviewProps> = ({ categories }) => {
  if (categories.length === 0) {
    return (
      <div
        className="bg-white border border-gray-200 rounded-2xl p-6 min-w-[250px] min-h-[100px] flex flex-col shadow-sm"
        role="region"
        aria-label="Geselecteerde categorieën overzicht"
      >
        <span className="text-gray-400">Geen categorieën geselecteerd</span>
      </div>
    );
  }

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl p-6 min-w-[250px] min-h-[100px] flex flex-col shadow-sm gap-6"
      role="region"
      aria-label="Geselecteerde categorieën overzicht"
    >
      {categories.map((cat) => (
        <section key={cat} aria-labelledby={`cat-title-${cat}`}>
          <h2
            id={`cat-title-${cat}`}
            className="text-xl font-bold mb-2 text-gray-900 text-left w-full"
          >
            {cat}
          </h2>
          <div className="text-gray-500">Geen producten vindbaar onder deze categorie</div>
        </section>
      ))}
    </div>
  );
};

export default SelectedOverview;
