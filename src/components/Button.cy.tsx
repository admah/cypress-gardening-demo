import Button from './Button';

describe('Button.cy.tsx', () => {
  it('mounts', () => {
    cy.mount(<Button>Hello!</Button>);
  });

  it('uses a custom text for button label', () => {
    cy.mount(<Button>Click Me!</Button>);

    cy.get('button').should('have.text', 'Click Me!');
  });

  it('calls OnClick when button is clicked', () => {
    const onClickSpy = cy.spy().as('onClickSpy');

    cy.mount(<Button onClick={onClickSpy}>Click Me!</Button>);

    cy.get('button').click();
    cy.get('@onClickSpy').should('have.been.called');
  });
});
