import styled from "styled-components";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useUserData } from "../contexts/UserDataContext";

export default function CapitalBalanceScreen() {
  const [{ name, token }] = useUserData();
  const [bills, setBills] = React.useState([]);

  React.useEffect(() => {
    const url = "https://mywallet-project13.herokuapp.com/bills";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(url, config).then((res) => {
      setBills(res.data);
      console.log(res.data);
    });
  }, []);

  function EmpityBills() {
    return <Empity>Não há registros de entrada ou saída</Empity>;
  }
  function RenderBills() {
    return bills.map((bill) => {
      return (
        <Render>
          <div>
            <p className="white">{bill.day}</p>
            <p>{bill.description}</p>
          </div>
          <Value value={bill.value}>{bill.value}</Value>
        </Render>
      );
    });
  }

  const sum = bills.reduce((accumulator, { value }) => {
    return accumulator + value;
  }, 0);
  console.log(sum);

  return (
    <Container>
      <Top>
        <h1>Olá, {name}</h1>
        <Link to="/">
          <ion-icon name="exit-outline"></ion-icon>
        </Link>
      </Top>
      <Bills>
        {bills.length >= 1 ? (
          <>
            <RenderBills />
            <Saldo>
              <p>SALDO</p>
            </Saldo>
            <Results total={sum}>{sum}</Results>
          </>
        ) : (
          <EmpityBills />
        )}
      </Bills>
      <AddBills>
        <Link to="/entry" style={{ textDecoration: "none" }}>
          <Button>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>Nova entrada</p>
          </Button>
        </Link>
        <Link to="/exit" style={{ textDecoration: "none" }}>
          <Button>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>Nova saída</p>
          </Button>
        </Link>
      </AddBills>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #8c11be;
`;

const Top = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  h1 {
    font-size: 26px;
    color: #ffffff;
    font-weight: bold;
  }

  ion-icon {
    font-size: 26px;
    color: #ffffff;
  }
`;

const Bills = styled.div`
  width: 100%;
  height: 80%;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 30px;
  position: relative;
`;

const Empity = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #868686;
  word-break: break-word;
  text-align: center;
`;

const Render = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  div {
    display: flex;
  }

  div > p {
    font-size: 16px;
    margin-right: 5px;
  }

  .white {
    color: #c6c6c6;
  }
`;

const Value = styled.p`
  font-size: 16px;
  color: ${(props) => (props.value >= 0 ? "#03AC00" : "#C70000")};
`;

const Saldo = styled.div`
  position: absolute;
  left: 30px;
  bottom: 30px;
  font-size: 17px;
  font-weight: bold;
`;

const Results = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
  font-size: 17px;
  font-weight: bold;
  color: ${(props) => (props.total >= 0 ? "#03AC00" : "#C70000")};
`;

const AddBills = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  a {
    width: 100%;
  }
`;

const Button = styled.div`
  width: 95%;
  height: 100%;
  background-color: #a328d6;
  border-radius: 5px;
  border: solid 1px #8c11be;
  color: #ffffff;
  padding: 10px;
  font-size: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ion-icon {
    font-size: 23px;
  }
`;
