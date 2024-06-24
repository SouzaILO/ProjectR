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
import GetEspecialista from '../../../Server/Features/Especialista/GetEspecialista.ts'
import { EspecialistID } from '../../../Server/Features/Especialista/EspecialistID.ts'

const TableEspecialista = (Filtro) => {
 
    const [EspecialistasArray, setEspecialistasArray] = useState<DocumentData[]>([])
   

    useEffect(() => {


        GetEspecialista(Filtro).then((value) => {
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
                <Td>Nome</Td>
                <Td>Status</Td>
                <Td>cpf</Td>
                <Td>cnpj</Td>
                <Td>Especialidade</Td>
              </Tr>
            </Thead>
            
            <Tbody>
            {EspecialistasArray.map((esp, index) => {
                  return (
                    index < 10 && (
                      <Tr key={esp.Nome}>
                        
                        <Td>
                          <Link to={`/Especialista/${esp.id}`}>
                            {esp.Nome}               
                            </Link>       
                        </Td>
                       
                        
                        <Td> 
                            <Link to={`/Especialista/${esp.id}`}>                     
                            {esp.status}     
                            </Link>                 
                        </Td>
                        
                       

                        <Td>   
                            <Link to={`/Especialista/${esp.id}`}>                   
                            {esp.cpf}       
                            </Link>               
                        </Td>

                        
                        <Td>   
                            <Link to={`/Especialista/${esp.id}`}>                   
                            {esp.cnpj}       
                            </Link>               
                        </Td>
                        
                        
                        <Td>  
                          <Link to={`/Especialista/${esp.id}`}>                    
                            {esp.especialidade}  
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

export default TableEspecialista
