import React from 'react'
import { Flex, Box, Text, Button, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import Header from '../../Components/Nav/Header.tsx'
import { useParams } from 'react-router'
import HorariosAgenda from '../../Components/Agendas/horariosAgenda.tsx'
import CardsHome from '../../Components/Cards/CardsHome.tsx'





const Agenda = () => {

    return (
      <div>
      <Header />
      <PageFrame>
        <CardsHome
          Head={'Agenda Individual'}
          Body={'Agenda Individual'}
          Button={'Agenda Individual'}
          Link={'/agenda/individual'}
        />
        <CardsHome
          Head={'Agenda Reforco'}
          Body={'Buscar todos Funcionarios'}
          Button={'Buscar Funcionarios'}
          Link={'/funcionario'}
        />
      </PageFrame>
    </div>
    )



}

export default Agenda