import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, MenuRounded, LocationOnOutlined, LocalPhoneOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #ed1f24;
  height: 100px;
`;

const Wrapper = styled.div`
  padding: 25px 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  position: fixed;
  height: 100%;
  width: 50vw;
  background-color: #ed1f24;
  top: 0px;
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
  transition: all 0.5s ease;
`;

const MenuItem = styled.li`
  font-size: 14px;
  cursor: pointer;
  /* margin-left: 25px; */
`;

const Center = styled.div`
  flex: 2;
  text-align: center;
  margin-top: 75px;
`;

const Logo = styled.img`
  max-width: 75%;
  max-height: 75%;
  width: 160;
  height: 161;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ContactInfoSquare = styled.div`
  width:90%;
  height:30%;
  background-color:white;
  border-radius: 5px;
  display:flex;
  flex-direction:column;
  justify-content:center;
`
const ContactInfo = styled.div`
  margin: 15px 15px 5px;
  font-size: 17px;
  
`

const ContactInfoDetails = styled.div`
  /* flex:2; */
  color: black;
  flex-wrap:wrap;
`

const Navigation = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("mousedown", function (press) {
      if (!this.document.getElementById("menudiv").contains(press.target)) {
        setOpen(false);
      }
    });
    window.addEventListener("touchstart", function (press) {
      if (!this.document.getElementById("menudiv").contains(press.target)) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuRounded
            style={{ cursor: "pointer", fontSize: 40, color: "white" }}
            onClick={() => setOpen(!open)}
          ></MenuRounded>
          <Menu id="menudiv" style={{ left: open ? "0px" : "-50vw" }}>
            <Link to={"/"} style={{textDecoration:'none', color: "white"}}>
              <MenuItem onClick={() => setOpen(!open)}>HOME</MenuItem>
            </Link>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>REGISTER</MenuItem>
            <ContactInfoSquare>
              <ContactInfo>
                <LocationOnOutlined style={{color: "red", fontSize: 35}}/>
                <ContactInfoDetails>15025 Washington St. Haymarket, VA 20169 </ContactInfoDetails>
              </ContactInfo>
              <ContactInfo>
              <LocalPhoneOutlined style={{color: "red", fontSize: 35}}/>
                <ContactInfoDetails>(703) 298-9784</ContactInfoDetails>
              </ContactInfo>
            </ContactInfoSquare>
          </Menu>
          {/* <SearchContainer>
                <Input />
                <Search style={{color:"white", fontSize:16}}/>
            </SearchContainer> */}
        </Left>
        <Center>
          <Logo src="/img/HCC-Logo.png" />
        </Center>
        <Right>
          <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined style={{ color: "white", fontSize: 35 }} />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navigation;
