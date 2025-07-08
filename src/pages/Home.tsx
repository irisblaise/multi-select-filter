import { useState } from 'react';
import MultiSelect from '../components/MultiSelect';
import SelectedOverview from '../components/SelectedOverview';

const Home = () => {
  const [appliedCategories, setAppliedCategories] = useState<string[]>([]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex gap-8">
        <MultiSelect onApply={setAppliedCategories} />
        <SelectedOverview categories={appliedCategories} />
      </div>
    </div>
  );
};

export default Home;
