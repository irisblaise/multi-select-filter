import { usePersistentState } from '../utils/usePersistentState';
import MultiSelect from '../components/MultiSelect/MultiSelect';
import SelectedOverview from '../components/SelectedOverview/SelectedOverview';

const Home = () => {
  const [appliedCategories, setAppliedCategories] = usePersistentState<string[]>(
    'appliedCategories',
    [],
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col lg:flex-row gap-8 w-[90%] max-w-5xl">
        <div className="w-[90%] lg:w-1/2 mx-auto lg:mx-0">
          <MultiSelect onApply={setAppliedCategories} />
        </div>
        <div className="w-[90%] lg:w-1/2 mx-auto lg:mx-0">
          <SelectedOverview categories={appliedCategories} />
        </div>
      </div>
    </div>
  );
};

export default Home;
