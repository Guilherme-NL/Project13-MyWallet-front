import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CapitalBalanceScreen() {
  return (
    <Container>
      <Top>
        <h1>Olá, Pedro</h1>
        <ion-icon name="exit-outline"></ion-icon>
      </Top>
      <Bills>Não há registros de entrada ou saída</Bills>
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
