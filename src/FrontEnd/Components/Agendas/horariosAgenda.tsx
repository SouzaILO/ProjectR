/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Button, Flex, Select, Tab, Table, TableCaption, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Thead, Tr } from '@chakra-ui/react'
import { Link } from 'react-router-dom' 


//Componente que reder  uma tabela com horarios de 8:00 as 20:00 e recebe o dia da semana com um prop
// Para cade cedula da tabela é um select no qual o usuario escolhe 1 aluno para aula
// Cada linha da tabela é um horario e cada coluna sao horarios para 1 professor



const HorariosAgenda = (props) => {

    const dia = props.Dia
    const periodo = props.Periodo


    if(periodo === 'Manha'){
        return (
            <Flex
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                margin={'10px'}
                w={'100%'}
                h={'100%'}
                bg={'blue.300'}
                borderRadius={'10px'}
                
            >
            <TableContainer
            border={'0px'}
            padding={'5px'}
            width={'100%'}
            
          >
            <Table
              variant="striped"
              bg={'white'}
              h={'100%'}
              borderRadius={'5px'}
              colorScheme="blue"
              
              
            >
              <TableCaption>Agenda {props.dia} dia:</TableCaption>
              <Thead
                bg={'purple.300'}
                color={'white'}
                borderRadius={'5px'}
                padding={'5px'}
              >
                <Tr>
                  <Td>
                    <Text>Horario</Text>
                  </Td>
                    <Td>
                      <Text>Especialista:</Text>
                    </Td>
                </Tr>
              </Thead>
              <Tbody>
              <Tr>
                    <Td>
                        <Text>6:00</Text>
                    </Td>
                    <Td>
                        <Select  placeholder="Escolha um aluno">
                            <option value="option1">Aluno 1</option>
                            <option value="option2">Aluno 2</option>
                            <option value="option3">Aluno 3</option>
                        </Select>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text>7:00</Text>
                    </Td>
                    <Td>
                        <Select placeholder="Escolha um aluno">
                            <option value="option1">Aluno 1</option>
                            <option value="option2">Aluno 2</option>
                            <option value="option3">Aluno 3</option>
                        </Select>
                    </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>8:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>9:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>10:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>11:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>12:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>       
            </Flex>
    
        )
    }
    else if(periodo === 'Tarde'){

        return (
            <Flex
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                margin={'10px'}
                w={'100%'}
                h={'100%'}
                bg={'blue.300'}
                borderRadius={'10px'}
                
            >
            <TableContainer
            border={'0px'}
            padding={'5px'}
            width={'100%'}
            
          >
            <Table
              variant="striped"
              bg={'white'}
              h={'100%'}
              borderRadius={'5px'}
              colorScheme="blue"
              
              
            >
              <TableCaption>Agenda {props.dia} dia:</TableCaption>
              <Thead
                bg={'purple.300'}
                color={'white'}
                borderRadius={'5px'}
                padding={'5px'}
              >
                <Tr>
                  <Td>
                    <Text>Horario</Text>
                  </Td>
                    <Td>
                        <Text>Especialista:</Text>
                    </Td>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Text>13:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>14:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>15:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>16:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>17:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text>18:00</Text>
                  </Td>
                  <Td>
                    <Select placeholder="Escolha um aluno">
                      <option value="option1">Aluno 1</option>
                      <option value="option2">Aluno 2</option>
                      <option value="option3">Aluno 3</option>
                    </Select>
                  </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text>19:00</Text>
                    </Td>
                    <Td>
                        <Select placeholder="Escolha um aluno">
                        <option value="option1">Aluno 1</option>
                        <option value="option2">Aluno 2</option>
                        <option value="option3">Aluno 3</option>
                        </Select>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text>20:00</Text>
                    </Td>
                    <Td>
                        <Select placeholder="Escolha um aluno">
                        <option value="option1">Aluno 1</option>
                        <option value="option2">Aluno 2</option>
                        <option value="option3">Aluno 3</option>
                        </Select>
                    </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>       
            </Flex>
    
        )
    }


    


}



export default HorariosAgenda
