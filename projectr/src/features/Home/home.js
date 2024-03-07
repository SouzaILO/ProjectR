import React from "react";
import PageFrame from "../../Components/PageFrame";
import Header from "../../Components/Header";
import CardsHome from "../../Components/CardsHome";

const Home = () => {
  return (
    <div>
      <Header />
      <PageFrame>
        <CardsHome />
      </PageFrame>
    </div>
  );
};

export default Home;
