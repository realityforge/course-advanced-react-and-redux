import CommentList from '../../src/components/comment_list';
import { renderComponent, expect } from '../test_helper';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = {comments: ['hello1', 'hello2', 'hi']};
    component = renderComponent(CommentList, null, props);
  });

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component.find('li').slice(0,1)).to.have.text('hello1');
    expect(component.find('li').slice(1,2)).to.have.text('hello2');
    expect(component.find('li').slice(2,3)).to.have.text('hi');

    //Alternative
    expect(component).to.contain('hello1');
    expect(component).to.contain('hello2');
    expect(component).to.contain('hi');
  });
});
