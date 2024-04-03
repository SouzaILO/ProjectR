import React, { Suspense } from 'react'
import { Spinner } from '@chakra-ui/react'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
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
        
        {

          //UserPerm().UserPerm > 9 ? (
            <CardsHome
              Head={'Agenda'}
              Body={'Buscar todos Agendamentos'}
              Button={'Buscar Agendamentos'}
              Link={'/agenda'}
            />
          //) : null

        }
       

      </PageFrame>
        
    </div>
  )
}



export default Home
