import { XIcon } from '@heroicons/react/outline';

import Button from './Button';
import { PlantType } from '../types';
import { useAppDispatch, setShowSlideover } from '../app/index';

interface PlantDetailProps {
  plant: PlantType;
}

const PlantDetail: React.FC<PlantDetailProps> = ({ plant }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
      <div className="px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h2
            id="slide-over-heading"
            className="text-lg font-medium text-gray-900"
          >
            {plant.title}
          </h2>
          <div className="ml-3 flex h-7 items-center">
            <Button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
              onClick={() => dispatch(setShowSlideover(false))}
            >
              <span className="sr-only">Close panel</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
      {/* Main */}
      <div>
        <div className="pb-1 sm:pb-6">
          <div>
            <div className="relative h-40 sm:h-56">
              <img
                className="absolute h-full w-full object-cover"
                src={plant.source}
                alt=""
              />
            </div>
            <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
              <div className="sm:flex-1">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {plant.species}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
          <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
            <div>
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                Description
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <p>{plant.description}</p>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                Light
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {plant.light}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default PlantDetail;
