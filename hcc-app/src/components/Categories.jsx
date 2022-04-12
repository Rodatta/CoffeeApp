import styled from "styled-components";
import { categories } from "../data";
import React from "react";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
    display:flex;
    padding-top: 80px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 99%;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
