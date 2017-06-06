import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor( props ) {
    super( props );

    this.state = { comment: '' };
    this.onTextAreaChange = this.onTextAreaChange.bind( this );
    this.onSubmit = this.onSubmit.bind( this );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="CommentBox">
        <textarea value={this.state.comment} onChange={this.onTextAreaChange}/>
        <button type="submit">Add Comment</button>
      </form>
    );
  }

  onSubmit( event ) {
    event.preventDefault();
    this.setState( { comment: '' } );
  }

  onTextAreaChange( event ) {
    this.setState( { comment: event.target.value } );
  }
}
