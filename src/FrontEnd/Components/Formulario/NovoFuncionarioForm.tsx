import { Button, Flex, FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {  
    Status,
  } from '../../../Data/ClienteData.ts'
import NovoFuncionario from '../../../Server/Features/Funcionarios/NovoFuncionario.ts'




const NovoFuncionarioForm = () => {
    const [FormFunc, setFormFunc] = useState({
        ID: 0,
        nome: '',
        cpf: '',
        cnpj: '',
        posicao: '',
        status: 'Ativo',
      })
    
      const handleSubmit = (e) => {
        e.preventDefault()
      }


    return (
      <Flex
        display={'flex'}
        flexDirection={'column'}

        margin={'10px'}
        w={'100%'}
        h={'100%'}
      >
        
            <form onSubmit={handleSubmit}>
            <Grid templateColumns="repeat(2, 1fr)" gap={3} w={'100%'} h={'100%'}>
            <FormControl id="nome">
              <FormLabel>Nome</FormLabel>
              <Input
                bg={'white'}
                type="text"
                name="nome"
                onChange={(e) =>
                  setFormFunc({ ...FormFunc, nome: e.target.value })
                }
                value={FormFunc.nome}
              />
              
            </FormControl>
            <FormControl id="cpf">
                <FormLabel>CPF</FormLabel>
                <Input
                    bg={'white'}
                    type="text"
                    name="cpf"
                    onChange={(e) =>
                      setFormFunc({ ...FormFunc, cpf: e.target.value })
                    }
                    value={FormFunc.cpf}
                />
            </FormControl>
            <FormControl id="cnpj">
                <FormLabel>CNPJ</FormLabel>
                <Input
                    bg={'white'}
                    type="text"
                    name="cnpj"
                    onChange={(e) =>
                      setFormFunc({ ...FormFunc, cnpj: e.target.value })
                    }
                    value={FormFunc.cnpj}
                />
            </FormControl>
            <FormControl id="posicao">
                <FormLabel>Posicao</FormLabel>
                <Input
                    bg={'white'}
                    type="text"
                    name="posicao"
                    onChange={(e) =>
                      setFormFunc({ ...FormFunc, posicao: e.target.value })
                    }
                    value={FormFunc.posicao}
                />
            </FormControl>
                <FormControl  id="status">
              <FormLabel>Status</FormLabel>
              <Select
                bg={'white'}
                name="status"
                onChange={(e) =>
                  setFormFunc({ ...FormFunc, status: e.target.value })
                }
                value={FormFunc.status}
              >
                {Status.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </Select>
            </FormControl>
                
                </Grid>
            </form>
            <Button mt={'10px'} colorScheme='purple' type="submit" onClick={() => NovoFuncionario(FormFunc)}>Enviar</Button>
            </Flex>
   
    )
    }

export default NovoFuncionarioForm
