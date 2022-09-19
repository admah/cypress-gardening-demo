import Slideover from './Slideover';
import { setShowSlideover } from '../../src/app/index';
import store from '../../src/app/store';

describe('Slideover.cy.tsx', () => {
  it('mounts', () => {
    cy.mount(<Slideover />);
  });

  it('is visible when setShowSlideover is true', () => {
    store.dispatch(setShowSlideover(true));

    cy.mount(<Slideover />);

    cy.get('div[data-testid=slideover-content]').should('be.visible');
  });

  it('is not visible when setShowSlideover is false', () => {
    store.dispatch(setShowSlideover(false));

    cy.mount(<Slideover />);

    cy.get('div[data-testid=slideover-content]').should('not.exist');
  });
});
