import PlantCardList from './PlantCardList';

describe('PlantCardList.cy.tsx', () => {
  beforeEach(() => {
    cy.intercept('GET', '/plants', {
      fixture: '../../cypress/fixtures/plants.json',
    });
  });
  it('mounts', () => {
    cy.mount(<PlantCardList />);
  });
});
