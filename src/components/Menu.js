import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

const Menu = ({ avatar, name, email }) => {
  return (
    <div className="p-3">
      <div className="text-center mb-3">
        <Image src={avatar} roundedCircle width="80" height="80" />
        <div>{name}</div>
        <div>{email}</div>
      </div>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="/">Список постов</Nav.Link>
        <Nav.Link href="/about">Обо мне</Nav.Link>
      </Nav>
    </div>
  );
};

export default Menu;
