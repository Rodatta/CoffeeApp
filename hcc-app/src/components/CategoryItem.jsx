import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    flex:1;
    width:10px;
    /* height: 10px; */
    
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`
const Info = styled.div`
    position: absolute;
    bottom: 10%;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color:gray;
    color: white;
    cursor: pointer;
    font-weight: 600;
    border-radius: 20px;
`
    

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Button>{item.title}</Button>
    </Container>
  )
}

export default CategoryItem