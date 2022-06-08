import { PlantType } from '../types';

interface PlantCardProps {
  plant: PlantType;
  onClick: () => void;
}

export default function PlantCard({ plant, onClick }: PlantCardProps) {
  return (
    <li key={plant.source} className="relative" onClick={onClick}>
      <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
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
