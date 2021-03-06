import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const list = props.comments.map((comment,i) => <li key={i}>{comment}</li>);
  return (
    <ul className="comment-list">
      {list}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return { comments: state.comments }
};

export default connect(mapStateToProps, null)(CommentList);
