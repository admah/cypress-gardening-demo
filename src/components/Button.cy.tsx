import Button from './Button';

describe('<Button/>', () => {
  it('playground', () => {
    cy.mount(<Button>Hello!</Button>);
  });
});
