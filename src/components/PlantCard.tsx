import { PlantType } from '../types';
import { useAppDispatch, setSelectedPlant } from '../app/index';
interface PlantCardProps {
  plant: PlantType;
}

export default function PlantCard({ plant }: PlantCardProps) {
  const dispatch = useAppDispatch();

  return (
    <li
      key={plant.source}
      className="relative"
      onClick={() => dispatch(setSelectedPlant(plant))}
    >
      <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden">
        <img
          src={plant.source}
          alt=""
          className="object-cover pointer-events-none group-hover:opacity-75"
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {plant.title}</span>
        </button>
      </div>
      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        {plant.title}
        <span className="mt-2 text-sm font-normal text-gray-600 truncate pointer-events-none">
          {plant.species ? ` - ${plant.species}` : ''}
        </span>
      </p>
    </li>
  );
}
