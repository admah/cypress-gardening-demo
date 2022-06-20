import { Navigation, PlantCardList, Slideover } from './components';

const Homepage: React.FC = () => {
  return (
    <>
      <div className="min-h-full">
        <Navigation />

        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">
                <PlantCardList />
                <Slideover />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Homepage;
