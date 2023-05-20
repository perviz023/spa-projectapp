import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Post from './Post';

const UserCard = ({ user, posts, onAvatarClick }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>Email: {user.email}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {posts.map((post) => (
          <Post key={post.id} post={post} onAvatarClick={onAvatarClick} />
        ))}
      </ListGroup>
    </Card>
  );
};

export default UserCard;
