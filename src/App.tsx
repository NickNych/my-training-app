import React from 'react';
import './App.css';
import styled from "styled-components";
import image from "./images/CardLayer.jpg"

function App() {
  return (
    <div className="App">
      <Button>Hello</Button>
{/*      <Card>*/}
{/*<CardImage></CardImage>*/}
{/*      </Card>*/}
    </div>
  );
}

export default App;

const Button =styled.button`
border-color: white;
`

// const Card = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 300px;
//   height: 350px;
//   border-radius: 15px;
//   background-color: #FFF;
//   box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
//   padding: 10px;
// `
//
//
// const CardImage =styled.div`
//   width: 280px;
//   height: 170px;
//   border-radius: 10px;
//   background-image: url("${image}");
//   background-position: center;
//   background-size: cover;
// `