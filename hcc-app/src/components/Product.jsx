import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px 10px;
  cursor: pointer;
`;

const Card = styled.div`
  background: white;
  border-radius: 5px;
  width: 160px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  transition: 0.1s;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Top = styled.div`
  display: block;
  position: relative;
  background-color: gray;
`;

const Image = styled.img`
  object-fit: cover;
`;

const Bottom = styled.div`
  padding: 20px;
`;

const TitleSection = styled.div`
  height: 75px;
  overflow: hidden;
`;
const Title = styled.div`
  font-size: 24px;
  color: gray;
  font-weight: 500;
  display: block;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #ed1f24;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Card>
        <Link to={`/product/${item._id}`} style={{textDecoration:'none'}}>
          <Top>
            <Image src={item.img}></Image>
          </Top>
          <Bottom>
            <TitleSection>
              <Title>{item.title}</Title>
            </TitleSection>
            <Price>${item.price[0]}</Price>
          </Bottom>
        </Link>
      </Card>
    </Container>
  );
};

export default Product;
