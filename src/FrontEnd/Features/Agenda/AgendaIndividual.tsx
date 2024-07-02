import React from 'react'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import Header from '../../Components/Nav/Header.tsx'
import BigAgenda from './AgendaCalendario.tsx'
import { getAuth } from 'firebase/auth'
import { Box } from '@chakra-ui/react'


 
const AgendaIndividual = () => {    



    return (
        
        <div>
            
            <Header />
            <Box>
                    <h1>Agenda de {getAuth().currentUser?.displayName}</h1>
                </Box>
            <PageFrame>
                <BigAgenda />
            </PageFrame>
        </div>
    )



}

export default AgendaIndividual
