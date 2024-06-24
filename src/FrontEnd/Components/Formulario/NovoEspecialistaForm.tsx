import { Button, Flex, FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {  
    Status,
  } from '../../../Data/ClienteData.ts'
  import NovoEspecialista from '../../../Server/Features/Especialista/NovoEspecialista.ts'


const NovoEspecialistaForm = () => {
    const [FormEspc, setFormEspc] = useState({
        ID: 0,
        nome: '',
        cpf: '',
        cnpj: '',
        posicao: '',
        especialidade: '',
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
                    setFormEspc({ ...FormEspc, nome: e.target.value })
                }
                value={FormEspc.nome}
              />
              
            </FormControl>
            <FormControl id="cpf">
                <FormLabel>CPF</FormLabel>
                <Input
                    bg={'white'}
                    type="text"
                    name="cpf"
                    onChange={(e) =>
                        setFormEspc({ ...FormEspc, cpf: e.target.value })
                    }
                    value={FormEspc.cpf}
                />
            </FormControl>
            <FormControl id="cnpj">
                <FormLabel>CNPJ</FormLabel>
                <Input
                    bg={'white'}
                    type="text"
                    name="cnpj"
                    onChange={(e) =>
                        setFormEspc({ ...FormEspc, cnpj: e.target.value })
                    }
                    value={FormEspc.cnpj}
                />
            </FormControl>
            <FormControl id="posicao">
                <FormLabel>especialidade</FormLabel>
                <Input
                    bg={'white'}
                    type="text"
                    name="posicao"
                    onChange={(e) =>
                        setFormEspc({ ...FormEspc, especialidade: e.target.value })
                    }
                    value={FormEspc.especialidade}
                />
            </FormControl>
                <FormControl  id="status">
              <FormLabel>Status</FormLabel>
              <Select
                bg={'white'}
                name="status"
                onChange={(e) =>
                    setFormEspc({ ...FormEspc, status: e.target.value })
                }
                value={FormEspc.status}
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
            <Link to={'/especialista'}>
            <Button mt={'10px'} colorScheme='purple' type="submit" onClick={() => {NovoEspecialista(FormEspc)}}>Enviar</Button>
            </Link>
            </Flex>
   
    )
    }

export default NovoEspecialistaForm
