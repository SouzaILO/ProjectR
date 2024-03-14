import React from 'react'
import { Flex, Box, Text, Button, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import Header from '../../Components/Nav/Header.tsx'
import { useParams } from 'react-router'








const Agenda = () => {

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
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Text>Segunda</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Terca</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Quarta</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Quinta</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Sexta</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Sabado</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
                    </Flex>
                </Flex>
            </PageFrame>
        </div>
    )



}

export default Agenda