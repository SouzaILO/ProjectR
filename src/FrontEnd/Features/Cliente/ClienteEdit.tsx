import React, { useEffect, useState } from 'react'
import { DocumentData } from 'firebase/firestore'
import { useParams } from 'react-router'
import { Box, Text } from '@chakra-ui/react'
import Header from '../../Components/Nav/Header.tsx'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import { GetClienteByID } from '../../../Server/Features/Cliente/GetCliente.ts'


const ClienteEdit = () => {
  const { id } = useParams()

  const [ClienteArray, setClienteArray] = useState<DocumentData[]>([])

  useEffect(() => {
    console.log(id)
    
    GetClienteByID(id).then((value) => {
      setClienteArray(value)
    })
    console.log(ClienteArray) 

  },[])

 
  
  return (
    <div >
      <Header />
      <PageFrame>


      {

        ClienteArray.map((cliente, index) => {
          return (
            <Box key={index} border="1px" borderColor="gray.200" borderRadius="5px" margin="5px" padding="5px">
              <Text>Nome: {cliente.Nome}</Text>
              <Text>Matricula: {cliente.Matricula}</Text>
              <Text>Sexo: {cliente.Sexo}</Text>
              <Text>Data de Nascimento: {cliente.DataNascimento}</Text>
              <Text>Responsavel: {cliente.Responsavel}</Text>
              <Text>Endereco: {cliente.Endereco}</Text>
              <Text>Estabelecimento de Ensino: {cliente.EstabelecimentoEnsino}</Text>
              <Text>Ano Escolar: {cliente.AnoEscolar}</Text>
              <Text>Status: {cliente.Status}</Text>
            </Box>
          )

          
      }
    )
      }

      </PageFrame>
    </div>
  )
}

export default ClienteEdit
