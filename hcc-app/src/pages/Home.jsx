import React from "react";
import styled from "styled-components";
import { useState } from "react";

import Navigation from "../components/Navigation";
import Products from "../components/Products";

const Header = styled.div`
  border-bottom: 5px solid #ed1f24;
  margin-left: 20px;
  width: 90vw;
  margin-top: 50px;
  display: flex;
`;
const Filter = styled.select`
  margin-top: 10px;
  /* background-image: "/img/HCC-Logo.png" */
  border: none;
  width: 90vw;
  height: 45px;
  font-size: 25pt;
  font-weight: bold;
`;

const Option = styled.option`
  font-size: 13pt;
  width: 30px;
`;

const Home = () => {
  const [filter, setFilter] = useState({});

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <Navigation />
      <Header>
        <Filter name="category" onChange={handleFilter}>
          <Option defaultValue>All Items</Option>
          <Option>Cafe Drinks</Option>
          <Option>Specialty Lattes</Option>
          <Option>Tea & Tea Lattes</Option>
          <Option>Kids Stuff</Option>
          <Option>Customer Picks</Option>
        </Filter>
      </Header>
      <Products filter={filter} />
    </div>
  );
};

export default Home;
