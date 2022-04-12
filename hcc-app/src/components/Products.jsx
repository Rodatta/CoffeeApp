import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const Products = ({ filter }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    try{
        setFilteredProducts(
          products.filter((item) =>
            Object.entries(filter).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    } catch(err) {}
  }, [products, filter]);

  return (
    <Container>
      <Wrapper>
        {filteredProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
