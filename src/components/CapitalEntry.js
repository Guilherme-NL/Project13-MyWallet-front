import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../contexts/UserDataContext";

export default function CapitalEntryScreen() {
  const navigate = useNavigate();

  const [{ token }] = useUserData();

  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");

  function submitEntry(e) {
    e.preventDefault();

    const url = "http://localhost:5000/bills";
    const body = { value: +value, description };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(url, body, config)
      .then(() => {
        navigate("/balance");
      })
      .catch((err) => {
        alert(err.response.statusText);
      });
  }

  return (
    <Container onSubmit={submitEntry}>
      <Top>
        <h1>Nova entrada</h1>
      </Top>
      <input
        type="number"
        placeholder="Valor"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Salvar entrada</button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #8c11be;

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

const Top = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 25px;

  h1 {
    font-size: 26px;
    color: #ffffff;
    font-weight: bold;
  }
`;
