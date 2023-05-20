import React from "react";
import {Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<UserDetails />} />
        </Routes>
      </Container>
      <Loader />
    </>
  );
};

export default App;
