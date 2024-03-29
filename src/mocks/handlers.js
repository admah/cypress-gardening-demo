// src/mocks/handlers.js

import { rest } from 'msw';

const initialPlantData = [
  {
    title: 'Strawberry',
    species: 'Quinault',
    source:
      'https://mobileimages.lowes.com/productimages/0fd1d97f-dec5-486f-b07a-543f7597b7d7/10594326.jpg',
    description:
      'Most popular variety of everbearing strawberry! Large, soft, deliciously sweet fruit ideal for preserves or fresh eating. Produces from late spring through fall.',
    light: 'Full Sun',
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
    description:
      'Heirloom. High yields of spineless, tender ribbed pods with excellent flavor. Traditional favorite for soups and stews. Can be canned, fried, roasted or boiled.',
    light: 'Full Sun',
  },
  {
    title: 'Carrot',
    species: 'Rainbow',
    source:
      'https://www.ufseeds.com/dw/image/v2/BFKV_PRD/on/demandware.static/-/Sites-master-urbanfarmer/default/dw49275a4b/images/products/Rainbow_Mix_Carrots1.jpg',
    description:
      'Heirloom, spectacular for juicing, great mix for any carrot lover.',
    light: 'Full Sun',
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

export const handlers = [
  rest.post('/plants', (req, res, ctx) => {
    console.log('🚀 ~ file: handlers.js ~ line 67 ~ rest.post ~ req', req);
    const { plant } = req.body;
    const updatedPlantData = initialPlantData.push(plant);

    return res(ctx.status(200), ctx.json(updatedPlantData));
  }),
  rest.get('/plants', (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json(initialPlantData)
    );
  }),
];
