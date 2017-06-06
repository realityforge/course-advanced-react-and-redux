import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions/index';

class CommentBox extends Component {
  constructor( props ) {
    super( props );

    this.state = { comment: '' };
    this.onTextAreaChange = this.onTextAreaChange.bind( this );
    this.onSubmit = this.onSubmit.bind( this );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="CommentBox">
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.onTextAreaChange}/>
        <div>
          <button type="submit">Add Comment</button>
        </div>
      </form>
    );
  }

  onSubmit( event ) {
    event.preventDefault();
    this.props.saveComment( this.state.comment );
    this.setState( { comment: '' } );
  }

  onTextAreaChange( event ) {
    this.setState( { comment: event.target.value } );
  }
}

export default connect( null, { saveComment } )( CommentBox );
