import React from "react";
import PageFrame from "../../Components/PageFrame";
import Header from "../../Components/Header";
import CardsHome from "../../Components/CardsHome";

const Home = () => {
  return (
    <div>
      <Header />
      <PageFrame>
        <CardsHome
          Head={"Clientes"}
          Body={"Buscar todos Clientes"}
          Button={"Buscar Clientes"}
          Link={"/cliente"}
        />
        <CardsHome
          Head={"Funcionarios"}
          Body={"Buscar todos Funcionarios"}
          Button={"Buscar Funcionarios"}
          Link={"/funcionarios"}
        />
        <CardsHome
          Head={"Agenda"}
          Body={"Agenda para controle de horarios"}
          Button={"Abrir Agenda"}
          Link={"/agenda"}
        />
      </PageFrame>
    </div>
  );
};

export default Home;
