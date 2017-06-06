import CommentBox from '../../src/components/comment_box'
import { renderComponent , expect } from '../test_helper';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    // component is a jquery object that wraps our component
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('CommentBox');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('has some text entered', () => {
    beforeEach( () => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text in text area', () => {
      //This really just verifies it is a controlled component
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the text area', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
