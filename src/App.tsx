import { Navigation, PlantCardList, Slideover } from './components';

export default function Homepage() {
  return (
    <>
      <div className="min-h-full">
        <Navigation />

        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <PlantCardList />
                <Slideover />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
