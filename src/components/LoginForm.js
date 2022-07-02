import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function submitLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    const url = "http://localhost:5000/login";
    const body = { email, password };

    axios
      .post(url, body)
      .then(() => {
        setIsLoading(false);
        navigate("/CapitalBalanceScreen");
      })
      .catch((err) => {
        alert(err.response.statusText);
        setIsLoading(false);
      });
  }

  return (
    <>
      <Container onSubmit={submitLogin}>
        <input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit">Entrar</button>
      </Container>
    </>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;

  input {
    width: 100%;
    height: 58px;
    background-color: #ffffff;
    border: 1px solid #8c11be;
    border-radius: 5px;
    padding: 12px;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    ::placeholder {
      color: #000000;
      font-size: 20px;
    }
    margin-bottom: 7px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 46px;
    background-color: #a328d6;
    border-radius: 5px;
    border: 1px solid #8c11be;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    color: #ffffff;
  }
`;
