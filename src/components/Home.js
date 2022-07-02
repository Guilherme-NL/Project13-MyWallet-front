import { Link } from "react-router-dom";
import styled from "styled-components";

import LoginForm from "./LoginForm";

export default function HomeScreen() {
  return (
    <Container>
      <h1>MyWallet</h1>
      <LoginForm></LoginForm>
      <Link to="/registration" style={{ textDecoration: "none" }}>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: #8c11be;

  h1 {
    font-size: 32px;
    color: #ffffff;
    font-family: "Saira Stencil One", cursive;
    margin-bottom: 25px;
  }

  p {
    font-size: 15px;
    color: #ffffff;
    margin-top: 35px;
  }
`;
