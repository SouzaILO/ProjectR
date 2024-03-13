import React from 'react'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import Header from '../../Components/Nav/Header.tsx'
import CardsHome from '../../Components/Cards/CardsHome.tsx'



const Home = () => {
  

  return (
    <div>
      <Header />
      <PageFrame>
        <CardsHome
          Head={'Clientes'}
          Body={'Buscar todos Clientes'}
          Button={'Buscar Clientes'}
          Link={'/cliente'}
        />
        <CardsHome
          Head={'Funcionarios'}
          Body={'Buscar todos Funcionarios'}
          Button={'Buscar Funcionarios'}
          Link={'/funcionario'}
        />
        <CardsHome
          Head={'Agenda'}
          Body={'Agenda para controle de horarios'}
          Button={'Abrir Agenda'}
          Link={'/agenda'}
        />
      </PageFrame>
    </div>
  )
}

export default Home
