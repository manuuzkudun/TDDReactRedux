import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CoomentBox', () => {

    let component;

    beforeEach(() => {
      component = renderComponent(CommentBox);
    })

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('contains a textarea element', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('contains a button element', () => {
    expect(component.find('button')).to.exist;
  });

})
