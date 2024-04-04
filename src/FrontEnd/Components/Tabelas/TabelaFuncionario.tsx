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
import { FiltrarFuncionario } from '../../../Server/Features/Funcionarios/TabelaFuncionarioLogica.ts'


// Componente que renderiza uma tabela com os dados passados por prop


const TabelaFuncionario = (Filtro) => {

   const funcionario =  FiltrarFuncionario(Filtro)

   const [FuncinariosArray, setFuncinariosArray] = useState<DocumentData[]>([])

    useEffect(() => {
            FiltrarFuncionario(Filtro).then((value) => {
              setFuncinariosArray(value)
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
              <Td>CPF/CNPJ</Td>
              <Td>Posição</Td>
            </Tr>
          </Thead>
          
          <Tbody>
            {FuncinariosArray.map((funcio, index) => {
              return (
                index < 10 && (
                  <Tr key={funcio.id}>
                    <Td>
                      <Link to={'/funcionario/' + funcio.id}>
                        {funcio.Nome}
                      </Link>
                    </Td>
                    <Td>
                      <Link to={'/funcionario/' + funcio.id}>
                        {funcio.status}
                      </Link>
                    </Td>
                    <Td>
                      <Link to={'/funcionario/' + funcio.id}>
                        {funcio.cpf}
                      </Link>
                    </Td>
                    <Td>
                      <Link to={'/funcionario/' + funcio.id}>
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
    