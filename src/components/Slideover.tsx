import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import {
  useAppDispatch,
  useAppSelector,
  setShowSlideover,
  selectShowSlideover,
  selectSelectedPlant,
} from '../app/index';
import CreatePlantForm from './CreatePlantForm';
import PlantDetail from './PlantDetail';

const Slideover: React.FC = () => {
  const dispatch = useAppDispatch();
  const showSlideover = useAppSelector(selectShowSlideover);
  const selectedPlant = useAppSelector(selectSelectedPlant);

  return (
    <Transition.Root show={showSlideover} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(setShowSlideover(false))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  {selectedPlant ? (
                    <PlantDetail plant={selectedPlant} />
                  ) : (
                    <CreatePlantForm />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Slideover;
