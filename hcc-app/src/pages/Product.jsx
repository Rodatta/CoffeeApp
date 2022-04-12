import React, { useEffect } from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Button = styled.button`
  padding: 5px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
        border-bottom: 2px solid black;
        opacity: 1;
        `}
`;

const Wrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;
const Middle = styled.div`\
    display: flex;
`;
const Bottom = styled.div`
  flex: 2;
  padding-left: 25px;
`;
const Title = styled.h1`
  flex: 5;
  padding: 0px 25px;
`;
const Image = styled.img`
  position: relative;
  z-index: -9999;
  max-width: 75%;
  max-height: 75%;
`;
const Price = styled.span`
  flex: 1;
  color: #ed1f24;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  margin-right: 25px;
  vertical-align: center;
  text-decoration: underline #ed1f24 0.5px;
`;
const SizeChoice = styled.h3``;
const Sizes = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const SizeOption = styled.option``;

const MilkChoice = styled.h3`
  padding-top: 20px;
`;
const Milks = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const MilkOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #ed1f24;
  display: flex;
  align-items: center;
  text-align:center;
  justify-content: center;
  margin: 0px 5px;
`;
const CartButton = styled.button`
  padding: 5px;
  margin-left: 10px;
  border: 2px solid #ed1f24;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [milk, setMilk] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, milk, size })
    );
  };

  // const [price, setPrice] = useState(product.price?.[0]);
  // const [size, setSize] = useState(0);
  // const [milk, setMilk] = useState(0);
  // const [quantity, setQuantity] = useState(1);

  // const changePrice = (number) => {
  //   setPrice(price + number);
  // };
  // const handleSize = (sizeIndex) => {
  //   const difference = product.price[sizeIndex] - product.price[size];
  //   setSize(sizeIndex);
  //   changePrice(difference);
  // };

  // const handleChange = (milk) => {
  //   setPrice(product.price[size] + milk.price);
  //   setMilk(milk);
  // };

  // function SizeGroup() {
  //   const [active_s, setActiveS] = useState(product.sizes?.[0]);
  //   return (
  //     <>
  //       <div>
  //         {product.sizes?.map((size, index) => (
  //           <Button
  //             key={size}
  //             name="sizeGroup"
  //             value="one"
  //             active={active_s === size}
  //             onClick={() => setActiveS(size)}
  //             onChange={() => handleChange(index)}
  //           >
  //             {size}
  //           </Button>
  //         ))}
  //       </div>
  //     </>
  //   );
  // }
  // function MilkGroup() {
  //   const [active_m, setActiveM] = useState(product.extraOptions?.[0]);
  //   return (
  //     <>
  //       <div>
  //         {product.extraOptions?.map((milk) => (
  //           <Button
  //             key={milk.text}
  //             name="milkGroup"
  //             value="two"
  //             active={active_m === milk}
  //             onClick={() => setActiveM(milk)}
  //             onChange={() => handleChange(milk)}
  //           >
  //             {milk.text}
  //           </Button>
  //         ))}
  //       </div>
  //     </>
  //   );
  // }

  return (
    <Container>
      <Navigation />
      <Wrapper>
        <Top>
          <Image src={product.img}></Image>
        </Top>
        <Middle>
          <Title>{product.title}</Title>
          <Price>${product.price?.[0]}</Price>
        </Middle>
        <Bottom>
          <SizeChoice>Size</SizeChoice>
          <Sizes onChange={(e) => setSize(e.target.value)}>
            {product.sizes?.map((s) => (
              <SizeOption key={s}>{s}</SizeOption>
            ))}
            {/* <SizeGroup /> */}
          </Sizes>
          <MilkChoice>Milk Choice</MilkChoice>
          <Milks onChange={(e) => setMilk(e.target.value)}>
            {product.extraOptions?.map((m) => (
              <MilkOption key={m.text}>{m.text}</MilkOption>
            ))}
          </Milks>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")}/>
            </AmountContainer>
            <CartButton onClick={handleClick}>ADD TO CART</CartButton>
          </AddContainer>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Product;
