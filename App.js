import './App.css';
import styled from "styled-components";
import { Navbar } from './Components/Navbar';

const Wrapper = styled.div`
  padding: 2rem;
  border: 1px solid red;

  h1:{
    color: blue;
    
  }

  @media all and (max-width: 620px){
    color: green;
  }
`
const A = styled.a`
text-decoration: none;
font-size: 24px;
color: ${props => props.color === "yellow" ? "yellow" : "red" }
`
const Button = styled.button`
cursor: pointer;
  background: ${props => props.primary ? "#00bcd4" : "white"};
  color: ${props => props.primary ? "white" : ""};
  border: 2px ${props => props.dashed ? "dashed" : "solid"};
  color: ${props => props.link ? "blue" : ""};
  border: ${props => props.text || props.link ? "none" : ""};
  padding: 10px;
  margin: 10px;
`

function App() {
  return (
    <div className="App">
    <Navbar />
    <Wrapper>
    <Button primary> Primary Button </Button>
    <Button default>Default Button</Button>
    <Button dashed>Dashed Button</Button>
    <Button text>Text Button</Button>
    <Button link>Link Button</Button>
    </Wrapper> 
    </div>
  );
}

export default App;
