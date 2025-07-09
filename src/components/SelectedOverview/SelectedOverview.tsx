import React from 'react';

interface SelectedOverviewProps {
  categories: string[];
}

const SelectedOverview: React.FC<SelectedOverviewProps> = ({ categories }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl p-6 min-h-[540px] max-h-[540px] flex flex-col shadow-sm"
      role="region"
      aria-label="Geselecteerde categorieën overzicht"
    >
      <h2 className="mb-6">
        <span className="text-2xl font-bold text-gray-900">Geselecteerde Categorieën</span>
      </h2>
      {categories.length === 0 ? (
        <span className="text-gray-500">Geen categorieën geselecteerd</span>
      ) : (
        <div className="overflow-auto" tabIndex={0}>
          {categories.map((cat) => (
            <section className="mb-4" key={cat} aria-labelledby={`cat-title-${cat}`}>
              <h3
                id={`cat-title-${cat}`}
                className="text-xl font-bold text-gray-900 text-left w-full break-words"
              >
                {cat}
              </h3>
              <div className="text-gray-500">Geen producten vindbaar onder deze categorie</div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedOverview;
