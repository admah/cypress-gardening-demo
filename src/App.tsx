import {
  useAppDispatch,
  useAppSelector,
  setShowSlideover,
  selectShowSlideover,
} from './app/index';

import { Navigation, PlantCardList, Slideover } from './components';

export default function Example() {
  const dispatch = useAppDispatch();
  const showSlideover = useAppSelector(selectShowSlideover);

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
                <Slideover
                  show={showSlideover}
                  onClose={() => dispatch(setShowSlideover(!showSlideover))}
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
