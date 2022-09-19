// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Ensure tailwind styles are loaded:
import 'tailwindcss/tailwind.css';

// Ensure global app styles are loaded:
// import '../../src/index.css'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react';
import { Provider } from 'react-redux';
import store from '../../src/app/store';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
import { MountOptions, MountReturn } from 'cypress/react';
import { EnhancedStore } from '@reduxjs/toolkit';
import { AppState } from '../../src/app/store';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mount(
        component: React.ReactNode,
        options?: MountOptions & { reduxStore?: EnhancedStore<AppState> }
      ): Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  const wrapped = <Provider store={store}>{component}</Provider>;

  return mount(wrapped, options);
});

// Example use:
// cy.mount(<MyComponent />)
