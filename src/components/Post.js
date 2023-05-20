//Post.js

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Comment from './Comment';

const Post = ({ post, onAvatarClick }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    console.log('toggleComments called');
    setShowComments(!showComments);
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="primary" onClick={toggleComments}>
          {showComments ? 'Скрыть комментарии' : 'Комментарии'}
        </Button>
      </Card.Body>
      {showComments && (
        <ListGroup className="list-group-flush">
          {post.comments && post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ListGroup>
      )}
      <Card.Footer>
      <small className="text-muted" onClick={() => onAvatarClick && onAvatarClick(post.userId)}>
  Автор поста
</small>
      </Card.Footer>
    </Card>
  );
};

export default Post;

