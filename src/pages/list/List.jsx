import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <h1>This is hotel list</h1>
    </div>
  );
};

export default List;
