import React from 'react'
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
import Header from '../../Components/Nav/Header.tsx'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import FuncionarioForm from '../../Components/Formulario/NovoFuncionarioForm.tsx'
 
const NovoFuncionario = () => {
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
              <Link to={'/funcionario'}>
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
                <Tab>Funcionario</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                    <FuncionarioForm />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </PageFrame>
    </div>
  )
}

export default NovoFuncionario
