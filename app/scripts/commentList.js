import React from 'react';
import $ from 'jquery';
import Remarkable from 'remarkable';

import Comment from './comment';

module.exports = React.createClass({
  render: function() {
    var liStyle = { background: '#cc181e'}
    if(this.state.hover_flag) {
                liStyle['background'] = '#880000'
    }
    else {
      liStyle['background'] = '#880000'
    }
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment id={comment.id} name={comment.name} key={comment.id} 
        onMouseEnter={this.hoverEvent} onMouseLeave={this.hoverEvent} 
        style={liStyle}>
          {comment.city}{' '}{comment.state}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});