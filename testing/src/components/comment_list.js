import React, { Component } from 'react';
import { connect } from 'react-redux';

//export default class CommentList extends Component {
//  render() {
//    return (
//      <ul className="CommentList">
//
//      </ul>
//    );
//  };
//}

const CommentList = function ( props ) {
  const data = props.comments.map( comment => <li key={comment}>{comment}</li> );
  return (
    <ul className="CommentList">
      {data}
    </ul>
  );
};

function mapStateToProps( state ) {
  return { comments: state.comments };
}

export default connect( mapStateToProps )( CommentList );
