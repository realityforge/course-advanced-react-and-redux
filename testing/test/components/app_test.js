import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group similar tests together
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // use 'it' to test a single attribute of a target
  it('shows the comment box', () => {
    // Rather than looking for a specific react component these
    // tests, verify the shape of the output html. We know that the
    // component has a unique classname so we use this strategy to identify
    // the subcomponent
    expect(component.find('.CommentBox')).to.exist;
  });
});
