import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CoomentBox', () => {

  it('has the correct class', () => {
    const component = renderComponent(CommentBox);
    expect(component).to.have.class('comment-box');
  });

  it('contains a textarea element', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  it('contains a button element', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });

})