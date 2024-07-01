import React from 'react'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import Header from '../../Components/Nav/Header.tsx'
import BigAgenda from './AgendaCalendario.tsx'
import { getAuth } from 'firebase/auth'
import { Box, Button } from '@chakra-ui/react'

 
const AgendaIndividual = () => {    



    return (
        
        <div>
            
            <Header />
            <Box>
                    <h1>Agenda de {getAuth().currentUser?.displayName}</h1>
                    <Button size={'40px'}  onClick={() => {authenticate() 
                            loadClient()
                          }
                        }>authorize and load</Button>
                    <Button onClick={
                        () => {execute()}
                    } >execute</Button>
                </Box>
            <PageFrame>
                <BigAgenda />
            </PageFrame>
        </div>
    )



}

export default AgendaIndividual
