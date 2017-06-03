import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group similar tests together
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // use 'it' to test a single attribute of a target
  it('shows the correct text', () => {
    expect(component).to.contain('React simple starter');
  });
});
