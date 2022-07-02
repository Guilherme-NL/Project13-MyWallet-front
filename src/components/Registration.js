import styled from "styled-components";
import { Link } from "react-router-dom";

import RegistrationForm from "./RegistrationForm";

export default function RegistrationScreen() {
  return (
    <Container>
      <h1>MyWallet</h1>
      <RegistrationForm></RegistrationForm>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p>Já tem uma conta? Entre agora!</p>
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
