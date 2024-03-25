import React from 'react'
import { Flex, Box, Text, Button, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import Header from '../../Components/Nav/Header.tsx'
import { useParams } from 'react-router'
import HorariosAgenda from '../../Components/Agendas/horariosAgenda.tsx'
import TabsAgendaDiaPeriodo from '../../Components/TabsAgenda/TabsAgendaDiaPeriodo.tsx'





const AgendaIndividual = () => {

    return (
        <div>
            <Header />
            <PageFrame>
                <Flex
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
                </Flex>
            </PageFrame>
        </div>
    )



}

export default AgendaIndividual