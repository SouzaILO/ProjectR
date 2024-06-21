import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { DocumentData } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { anoEscolar,nivelEscolar, Sexo, Status} from '../../../Data/ClienteData.ts'
import { GetAlunosByID } from '../../../Server/Features/Cliente/Aluno/GetAlunos.ts'
import AlunoEditServer from '../../../Server/Features/Cliente/Aluno/AlunoEditBack.ts'




const EditAlunoForm = () => {

    const { id } = useParams()
    const [ClienteArray, setClienteArray] = useState<(DocumentData | undefined)[]>([])
    const [FormCliente, setFormCliente] = useState({
      nome: '' ,
      sexo: '',
      dataNascimento: '',
      responsavel: '',
      endereco: '',
      estabelecimentoEnsino: '',
      nivelEscolar: '',
      anoEscolar: '',
      status: '',
      id: id
    }) 
  
    useEffect(() => {
      GetAlunosByID(id).then((clientes) => {
        setClienteArray(clientes)
  
        if (clientes.length > 0) {
          const firstCliente = clientes[0]
          if (firstCliente) {
            setFormCliente({
              nome: firstCliente.Nome,
              sexo: firstCliente.Sexo,
              dataNascimento: firstCliente.DataNascimento,
              responsavel: firstCliente.Responsavel,
              endereco: firstCliente.Endereco,
              estabelecimentoEnsino: firstCliente.EstabelecimentoEnsino,
              nivelEscolar: firstCliente.nivelEscolar,
              anoEscolar: firstCliente.anoEscolar,
              status: firstCliente.Status,
              id: firstCliente.id
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
        <Grid templateColumns="repeat(3, 1fr)" gap={3} w={'100%'} h={'100%'}>
          <FormControl id="nome">
            <FormLabel>Nome</FormLabel>
            <Input
              bg={'white'}
              type="text"
              name="nome"
              
              onChange={(e) =>
                setFormCliente({ ...FormCliente, nome: e.target.value })
              }
              value={FormCliente.nome}
            />
            <FormErrorMessage>{}</FormErrorMessage>
          </FormControl>
          <FormControl id="sexo">
            <FormLabel>Sexo</FormLabel>
            <Select
              bg={'white'}
              name="sexo"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, sexo: e.target.value })
              }
              value={FormCliente.sexo}
            >
              {Sexo.map((sexo) => (
                <option key={sexo} value={sexo}>
                  {sexo}
                </option>
              ))}
            </Select>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl id="dataNascimento">
            <FormLabel>Data de Nascimento</FormLabel>
            <Input
              bg={'white'}
              type="date"
              name="dataNascimento"
              onChange={(e) =>
                setFormCliente({
                  ...FormCliente,
                  dataNascimento: e.target.value,
                })
              }
              value={FormCliente.dataNascimento}
            />
            <FormErrorMessage>{}</FormErrorMessage>
          </FormControl>
          <FormControl id="responsavel">
            <FormLabel>Responsavel</FormLabel>
            <Input
              bg={'white'}
              type="text"
              name="responsavel"
              onChange={(e) =>
                setFormCliente({
                  ...FormCliente,
                  responsavel: e.target.value,
                })
              }
              value={FormCliente.responsavel}
            ></Input>
          </FormControl>

          <FormControl id="endereco">
            <FormLabel>Endereco</FormLabel>
            <Input
              bg={'white'}
              type="text"
              name="endereco"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, endereco: e.target.value })
              }
              value={FormCliente.endereco}
            />
          </FormControl>
          <FormControl id="estabelecimentoEnsino">
            <FormLabel>Estabelecimento de Ensino</FormLabel>
            <Input
              bg={'white'}
              type="text"
              name="estabelecimentoEnsino"
              onChange={(e) =>
                setFormCliente({
                  ...FormCliente,
                  estabelecimentoEnsino: e.target.value,
                })
              }
              value={FormCliente.estabelecimentoEnsino}
            />
          </FormControl>
          <FormControl id="nivelEscolar">
            <FormLabel>Nivel Escolar</FormLabel>
            <Select
              bg={'white'}
              name="nivelEscolar"
              onChange={(e) =>
                setFormCliente({
                  ...FormCliente,
                  nivelEscolar: e.target.value,
                })
              }
              value={FormCliente.nivelEscolar}
            >
              {nivelEscolar.map((nivel) => (
                <option key={nivel} value={nivel}>
                  {nivel}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="anoEscolar">
            <FormLabel>Ano Escolar</FormLabel>
            <Select
              bg={'white'}
              name="anoEscolar"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, anoEscolar: e.target.value })
              }
              value={FormCliente.anoEscolar}
            >
              {anoEscolar.map((ano) => (
                <option key={ano} value={ano}>
                  {ano}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl  id="status">
            <FormLabel>Status</FormLabel>
            <Select
              bg={'white'}
              name="status"
              onChange={(e) =>
                setFormCliente({ ...FormCliente, status: e.target.value })
              }
              value={FormCliente.status}
            >
              {Status.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </Select>
          </FormControl>
          
          
        </Grid>
        <Link to={'/Alunos'}>
          <Button mt={'10px'} colorScheme='purple' onClick={ () => {
            AlunoEditServer(FormCliente )
            //console.log('FormCliente', FormCliente)
            }} >Enviar</Button>
        </Link>
      </form>
    </Flex>
  </Flex>
    )


}

export default EditAlunoForm