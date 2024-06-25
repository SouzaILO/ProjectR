import React from 'react'
import { Box, Button, Flex, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import Header from '../../Components/Nav/Header.tsx'
import HorariosAgenda from '../../Components/Agendas/horariosAgenda.tsx'
import TabsAgendaDiaPeriodo from '../../Components/TabsAgenda/TabsAgendaDiaPeriodo.tsx'
import BigAgenda from './AgendaCalendario.tsx'




 
const AgendaIndividual = () => {

    return (
        <div>
            <Header />
            <PageFrame>
                <BigAgenda />
            </PageFrame>
        </div>
    )



}

export default AgendaIndividual

{/* <Flex
display={'flex'}
flexDirection={'column'}
margin={'10px'}
w={'100%'}
h={'100%'}
bg={'blue.300'}
borderRadius={'10px'}


>
<Flex
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    

>
    <Tabs>
        <TabList
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            gap={'50px'}
        >
            
                <Select maxW={'200px'} color={'black'} placeholder="Escolha um Especialista">
                    <option color='black' value="option1">Especialista 1</option>
                    <option value="option2">Especialista 2</option>
                    <option value="option3">Especialista 3</option>
                </Select>
            
            <Tab>Segunda</Tab>
            <Tab>Terca</Tab>
            <Tab>Quarta</Tab>
            <Tab>Quinta</Tab>
            <Tab>Sexta</Tab>
            <Tab>Sabado</Tab>
            <Tab>Domingo</Tab>
        </TabList>

        <TabPanels>
            <TabsAgendaDiaPeriodo Dia={'Segunda'}/>
            <TabsAgendaDiaPeriodo Dia={'Terca'} />
            <TabsAgendaDiaPeriodo Dia={'Quarta'} />
            <TabsAgendaDiaPeriodo Dia={'Quinta'} />
            <TabsAgendaDiaPeriodo Dia={'Sexta'} />
            <TabsAgendaDiaPeriodo Dia={'Sabado'} />
            <TabsAgendaDiaPeriodo Dia={'Domingo'} />
        </TabPanels>
    </Tabs>
</Flex>
</Flex> */}