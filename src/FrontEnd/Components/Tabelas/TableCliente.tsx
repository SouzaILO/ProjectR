import React from 'react'
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
import { FiltrarClienteLogic } from '../../../Server/Features/Cliente/TabelaClienteLogica.ts'
//import Clientes from "../../Json/Clientes.json";

// Componente que renderiza uma tabela com os dados passados por props
// Exemplo de uso:

const TableComponent = (Filtro) => {
  const Clientes = FiltrarClienteLogic(Filtro)
  Clientes.sort((a, b) => (a.nome > b.nome ? 1 : -1))
  
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
          {Clientes.map((cliente, index) => {
            return (
              index < 10 && (
                <Tr key={cliente.Matricula}>
                  <Td>
                    <Link to={'/cliente/' + cliente.Matricula}>
                      {cliente.nome}
                    </Link>
                  </Td>
                  <Td>
                    <Link to={'/cliente/' + cliente.Matricula}>
                      {cliente.status}
                    </Link>
                  </Td>
                  <Td>
                    <Link to={'/cliente/' + cliente.Matricula}>
                      {cliente.responsavel}
                    </Link>
                  </Td>
                  <Td>
                    <Link to={'/cliente/' + cliente.Matricula}>
                      {cliente.estabelecimentoEnsino}
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
