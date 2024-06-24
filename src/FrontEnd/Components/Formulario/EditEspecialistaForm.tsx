import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { DocumentData } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { anoEscolar,nivelEscolar, Sexo, Status} from '../../../Data/ClienteData.ts'
import {  GetEspecialistaByID } from '../../../Server/Features/Especialista/GetEspecialista.ts'
import EspecialistaEditServer from '../../../Server/Features/Especialista/EspecialistaEditBack.ts'




const EditSpecialistForm = () => {

    const { id } = useParams()
    
    const [FormEspecialista, setFormEspecialista] = useState({
       id: id,
        nome: '',
        cpf: '',
        cnpj: '',
        posicao: '',
        especialidade: '',
        status: 'Ativo',
    }) 
  
    useEffect(() => {
      GetEspecialistaByID(id).then((especialista) => {
        
  
        if (especialista.length > 0) {
          const firstEspecialista = especialista[0]
          if (firstEspecialista) {
            setFormEspecialista({
                nome: firstEspecialista.Nome,
                cpf: firstEspecialista.cpf,
                cnpj: firstEspecialista.cnpj,
                posicao: firstEspecialista.posicao,
                especialidade: firstEspecialista.especialidade,
                status: firstEspecialista.status,
                 id: firstEspecialista.id
            })
          }
        }
      })
    }, [id])

    return (
        
      <Flex
      display={'flex'}
      flexDirection={'column'}
      bg={'blue.200'}
      w={'100%'}
      h={'100%'}
      p={4}
      borderRadius={'10px'}
    >
    <Flex w={'100%'} bg={'blue.200'} justifyContent={'center'}>
      <form>
      <Grid templateColumns="repeat(2, 1fr)" gap={3} w={'100%'} h={'100%'}>
            <FormControl id="nome">
              <FormLabel>Nome</FormLabel>
              <Input
                bg={'white'}
                type="text"
                name="nome"
                onChange={(e) =>
                    setFormEspecialista({ ...FormEspecialista, nome: e.target.value })
                }
                value={FormEspecialista.nome}
              />
              
            </FormControl>
            <FormControl id="cpf">
                <FormLabel>CPF</FormLabel>
                <Input
                    bg={'white'}
                    type="text"
                    name="cpf"
                    onChange={(e) =>
                        setFormEspecialista({ ...FormEspecialista, cpf: e.target.value })
                    }
                    value={FormEspecialista.cpf}
                />
            </FormControl>
            <FormControl id="cnpj">
                <FormLabel>CNPJ</FormLabel>
                <Input
                    bg={'white'}
                    type="text"
                    name="cnpj"
                    onChange={(e) =>
                        setFormEspecialista({ ...FormEspecialista, cnpj: e.target.value })
                    }
                    value={FormEspecialista.cnpj}
                />
            </FormControl>
            <FormControl id="posicao">
                <FormLabel>especialidade</FormLabel>
                <Input
                    bg={'white'}
                    type="text"
                    name="posicao"
                    onChange={(e) =>
                        setFormEspecialista({ ...FormEspecialista, especialidade: e.target.value })
                    }
                    value={FormEspecialista.especialidade}
                />
            </FormControl>
                <FormControl  id="status">
              <FormLabel>Status</FormLabel>
              <Select
                bg={'white'}
                name="status"
                onChange={(e) =>
                    setFormEspecialista({ ...FormEspecialista, status: e.target.value })
                }
                value={FormEspecialista.status}
              >
                {Status.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </Select>
            </FormControl>
                </Grid>

            <Link to={'/especialista'}>
                    <Button mt={'10px'} colorScheme='purple' onClick={ () => {
                    EspecialistaEditServer(FormEspecialista )
            
            }} >Enviar</Button>
        </Link>
      </form>
    </Flex>
  </Flex>
    )


}

export default EditSpecialistForm