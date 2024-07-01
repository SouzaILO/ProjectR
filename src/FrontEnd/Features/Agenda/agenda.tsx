import React from 'react'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import Header from '../../Components/Nav/Header.tsx'
import CardsHome from '../../Components/Cards/CardsHome.tsx'

 



const Agenda = () => {

    return (
      <div>
         <script src="https://apis.google.com/js/api.js" type="text/javascript"></script>
      <Header />
      <PageFrame>
        <CardsHome
          Head={'Agenda Individual'}
          Body={'Agenda Individual'}
          Button={'Agenda Individual'}
          Link={'/agenda/individual'}
        />
        {/* <CardsHome
          Head={'Agenda Reforco'}
          Body={'Buscar todos Funcionarios'}
          Button={'Buscar Funcionarios'}
          Link={'/funcionario'}
        /> */}
      </PageFrame>
    </div>
    )



}

export default Agenda