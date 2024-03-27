import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FiltrarFuncionario } from '../../../Server/Features/Funcionarios/TabelaFuncionarioLogica.ts'


// Componente que renderiza uma tabela com os dados passados por prop


const TabelaFuncionario = (Filtro) => {

   const funcionario =  FiltrarFuncionario(Filtro)

    
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
              <Td>CPF/CNPJ</Td>
              <Td>Posição</Td>
            </Tr>
          </Thead>
          
          <Tbody>
            {funcionario.map((funcio, index) => {
              return (
                index < 10 && (
                  <Tr key={funcio.ID}>
                    <Td>
                      <Link to={'/funcionario/' + funcio.ID}>
                        {funcio.nome}
                      </Link>
                    </Td>
                    <Td>
                      <Link to={'/funcionario/' + funcio.ID}>
                        {funcio.status}
                      </Link>
                    </Td>
                    <Td>
                      <Link to={'/funcionario/' + funcio.ID}>
                        {funcio.cpf}
                      </Link>
                    </Td>
                    <Td>
                      <Link to={'/funcionario/' + funcio.ID}>
                        {funcio.posicao}
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

export default TabelaFuncionario
    