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
          Head={'Alunos'}
          Body={'Buscar todos Alunos'}
          Button={'Buscar Alunos'}
          Link={'/Alunos'}
        />   

        <CardsHome
          Head={'Agenda'}
          Body={'Buscar todos Agendamentos'}
          Button={'Buscar Agendamentos'}
          Link={'/agenda'}
        />
          

      

      </PageFrame>
        
    </div>
  )
}



export default Home
