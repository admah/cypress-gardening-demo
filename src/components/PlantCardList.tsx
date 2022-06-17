import {
  useAppDispatch,
  useAppSelector,
  selectPlants,
  setShowAddPlantForm,
} from '../app/index';
import PlantCard from './PlantCard';
import Button from './Button';

import { useGetPlantsQuery } from '../app/services/plants';

export default function PlantCardList() {
  const dispatch = useAppDispatch();

  const { isLoading } = useGetPlantsQuery();

  const plantList = useAppSelector(selectPlants);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!plantList) {
    return <div>No plants(</div>;
  }

  return (
    <>
      <div className="flex justify-between py-2.5">
        <h1 className="py-1.5 text-xl font-semibold text-gray-900">
          My Plants
        </h1>
        <Button
          text="Add plant"
          onClick={() => dispatch(setShowAddPlantForm())}
        />
      </div>

      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {plantList.map((plant) => (
          <PlantCard key={plant.source} plant={plant} />
        ))}
      </ul>
    </>
  );
}
