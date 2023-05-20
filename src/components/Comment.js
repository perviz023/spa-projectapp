import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const Comment = ({ comment }) => {
  return (
    <ListGroupItem>
      <div className="font-weight-bold">{comment.email}</div>
      <div>{comment.body}</div>
    </ListGroupItem>
  );
};

export default Comment;
