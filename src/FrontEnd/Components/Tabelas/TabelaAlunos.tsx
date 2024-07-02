import React, { useEffect, useState } from 'react'
import {
  Table,
  TableCaption, 
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { DocumentData } from 'firebase/firestore'
import GetAluno from '../../../Server/Features/Cliente/Aluno/GetAlunos.ts'
//import Clientes from "../../Json/Clientes.json";

// Componente que renderiza uma tabela com os dados passados por props
// Exemplo de uso:

const TableComponent = (Filtro: unknown) => {
  
  const [ClienteArray, setEspecialistasArray] = useState<DocumentData[]>([])
   

    useEffect(() => {


      GetAluno(Filtro).then((value) => {
            setEspecialistasArray(value)
        })
    }, [Filtro])
  
  return (
    <TableContainer
      border={'0px'}
      padding={'5px'}
      width={'100%'}
      overflowY={'hidden'}
    >
      <Table
        variant="striped"
        bg={'white'}
        h={'100%'}
        borderRadius={'5px'}
        colorScheme="blue"
      >
        <TableCaption>Tabela de Cliente</TableCaption>
        <Thead>
          <Tr>
            {/*Cabecalho*/}
            <Td>Nome</Td>
            <Td>Status</Td>
            <Td>Responsavel</Td>
            <Td>Estabelecimento de Ensino</Td>
          </Tr>
        </Thead>
        
        <Tbody>
          {ClienteArray.map((cliente, index) => {
            return (
              index < 10 && (
                <Tr key={cliente.id}>
                  <Td>
                    <Link to={'/Aluno/' + cliente.id}>
                      {cliente.Nome}
                    </Link>
                  </Td>
                  <Td>
                    <Link to={'/Aluno/' + cliente.id}>
                      {cliente.Status}
                    </Link>
                  </Td>
                  <Td>
                    <Link to={'/Aluno/' + cliente.id}>
                      {cliente.Responsavel}
                    </Link>
                  </Td>
                  <Td>
                    <Link to={'/Aluno/' + cliente.id}>
                      {cliente.EstabelecimentoEnsino}
                    </Link>
                  </Td>
                </Tr>
              )
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
