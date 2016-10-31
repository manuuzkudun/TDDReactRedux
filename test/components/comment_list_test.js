import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CoomentList', () => {

  let component;

  beforeEach(() => {
    const props = {comments: ['Comment 1', 'Comment 2', 'Comment 3']}
    component = renderComponent(CommentList, null, props);
  });


  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('Comment 1');
    expect(component).to.contain('Comment 2');
    expect(component).to.contain('Comment 3');
  });

});
