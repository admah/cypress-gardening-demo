import { useState } from 'react';

import PlantCard from './PlantCard';
import { PlantType } from '../types';

interface PlantCardListProps {
  onClick: () => void;
}

const plants: PlantType[] = [
  {
    title: 'Strawberry',
    species: 'Quinault',
    source:
      'https://mobileimages.lowes.com/productimages/0fd1d97f-dec5-486f-b07a-543f7597b7d7/10594326.jpg',
  },
  {
    title: 'Blueberry',
    species: 'Legacy',
    source:
      'https://mobileimages.lowes.com/productimages/db3d9e83-4bfb-48c9-ab0a-459073679b42/10585610.jpg',
  },
  {
    title: 'Tomato',
    species: 'Cherokee Purple',
    source:
      'http://mobileimages.lowes.com/productimages/0c397d17-5612-446c-b8c6-358aa4d903b9/42680201.jpg',
  },
  {
    title: 'Cucumber',
    species: 'Boston Pickling',
    source:
      'https://www.ufseeds.com/dw/image/v2/BFKV_PRD/on/demandware.static/-/Sites-master-urbanfarmer/default/dw800943c9/images/products/Boston-Pickling-Cucumber-Seeds.jpg',
  },
  {
    title: 'Okra',
    species: 'Clemson Spineless - 80',
    source:
      'https://www.ufseeds.com/dw/image/v2/BFKV_PRD/on/demandware.static/-/Sites-master-urbanfarmer/default/dwb3c38582/images/products/Organic-Clemson-Spineless-80.jpg',
  },
  {
    title: 'Carrot',
    species: 'Rainbow',
    source:
      'https://www.ufseeds.com/dw/image/v2/BFKV_PRD/on/demandware.static/-/Sites-master-urbanfarmer/default/dw49275a4b/images/products/Rainbow_Mix_Carrots1.jpg',
  },
  {
    title: 'Green Bean',
    species: 'Blue Lake 274 Bush',
    source:
      'https://www.ufseeds.com/dw/image/v2/BFKV_PRD/on/demandware.static/-/Sites-master-urbanfarmer/default/dwb4ef3204/images/products/Blue-Lake-Bush-Beans.jpg',
  },
  {
    title: 'Pea',
    species: 'Sugar Snap',
    source:
      'https://www.ufseeds.com/dw/image/v2/BFKV_PRD/on/demandware.static/-/Sites-master-urbanfarmer/default/dwa5427019/images/products/Sugar-Snap-Pea-Seeds.jpg',
  },
];

export default function PlantCardList({ onClick }: PlantCardListProps) {
  return (
    <>
      <h1 className="py-4 text-xl font-semibold text-gray-900">My Plants</h1>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {plants.map((plant) => (
          <PlantCard key={plant.source} plant={plant} onClick={onClick} />
        ))}
      </ul>
    </>
  );
}
