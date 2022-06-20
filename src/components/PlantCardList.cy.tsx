import PlantCardList from './PlantCardList';

describe('<PlantCardList/>', () => {
  beforeEach(() => {
    cy.intercept('GET', '/plants', {
      fixture: '../../cypress/fixtures/plants.json',
    });
  });
  it('mounts', () => {
    cy.mount(<PlantCardList />);
  });
});
