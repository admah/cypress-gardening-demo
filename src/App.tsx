import { useState } from 'react';

import { Navigation, PlantCardList, Slideover } from './components';

export default function Example() {
  const [showSlideover, setShowSlideover] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <Navigation />

        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <PlantCardList onClick={() => setShowSlideover(true)} />
                <Slideover
                  show={showSlideover}
                  onClose={() => setShowSlideover(!showSlideover)}
                />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
