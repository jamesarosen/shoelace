import { expect } from '@open-wc/testing';
import SlSelect from '@shoelace-style/shoelace/dist/react/SlSelect';

// This test exists to ensure that the package exports React wrappers in a
// manner consistent with the documentation.
it('Should export React wrappers of the components', () => {
  expect(SlSelect).not.to.be.undefined;
});
