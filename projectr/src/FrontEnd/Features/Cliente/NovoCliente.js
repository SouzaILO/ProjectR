import React from 'react'
import Header from '../../../FrontEnd/Components/Nav/Header'
import PageFrame from '../../Components/Frames/PageFrame'
import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ClienteForm from '../../Components/Formulario/ClienteForm'

const NovoCliente = () => {
  return (
    <div>
      <Header />
      <PageFrame>
        <Flex display={'flex'} flexDirection={'column'} w={'100%'} h={'100%'}>
          <Flex
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            w={'100%'}
            h={'5%'}
          >
            <Box marginLeft={'90%'}>
              <Link to={'/cliente'}>
                <Button>Voltar</Button>
              </Link>
            </Box>
          </Flex>
          
          <Flex
            display={'flex'}
            bg={'blue.200'}
            flexDirection={'column'}
            w={'100%'}
            h={'90%'}
            p={4}
            borderRadius={'10px'}
          >
            <Tabs>
              <TabList>
                <Tab>Aluno</Tab>
                <Tab>Responsavel</Tab>
                <Tab>Three</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <ClienteForm />
                </TabPanel>
                <TabPanel>
                  <p>Responsavel!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </PageFrame>
    </div>
  )
}

export default NovoCliente
