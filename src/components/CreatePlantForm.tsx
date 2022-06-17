import { useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useAppDispatch, setShowSlideover } from '../app/index';

export default function CreatePlantForm() {
  const dispatch = useAppDispatch();
  return (
    <form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
      <div className="flex-1">
        {/* Header */}
        <div className="bg-gray-50 px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between space-x-3">
            <div className="space-y-1">
              <Dialog.Title className="text-lg font-medium text-gray-900">
                {' '}
                New plant{' '}
              </Dialog.Title>
              <p className="text-sm text-gray-500">
                Add a new plant to your garden by filling in the information
                below.
              </p>
            </div>
            <div className="flex h-7 items-center">
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={() => dispatch(setShowSlideover(false))}
              >
                <span className="sr-only">Close panel</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider container */}
        <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
          {/* Plant name */}
          <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
            <div>
              <label
                htmlFor="plant-name"
                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
              >
                {' '}
                Plant name{' '}
              </label>
            </div>
            <div className="sm:col-span-2">
              <input
                type="text"
                name="plant-name"
                id="plant-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Plant species */}
          <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
            <div>
              <label
                htmlFor="plant-species"
                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
              >
                {' '}
                Plant species{' '}
              </label>
            </div>
            <div className="sm:col-span-2">
              <input
                type="text"
                name="plant-species"
                id="plant-species"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Plant description */}
          <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
            <div>
              <label
                htmlFor="plant-description"
                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
              >
                {' '}
                Description{' '}
              </label>
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="plant-description"
                name="plant-description"
                rows={3}
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue={''}
              />
            </div>
          </div>
          {/* Plant light needs */}
          <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
            <div>
              <label
                htmlFor="plant-light"
                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
              >
                {' '}
                Light{' '}
              </label>
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="plant-light"
                name="plant-light"
                rows={3}
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => dispatch(setShowSlideover(false))}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
