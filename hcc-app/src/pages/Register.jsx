import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("img/tree house view.webp") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 75%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top:5px;
`;
const Input = styled.input`
  flex: 1;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  margin: 20px 0px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #ed1f24;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
