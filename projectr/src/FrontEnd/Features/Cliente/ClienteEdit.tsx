import React from 'react'
import Header from '../../Components/Nav/Header.tsx'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import { useParams } from 'react-router'
import { Box, Text } from '@chakra-ui/react'
import { PegarClientePorId } from '../../../Server/Features/Cliente/ClienteTS.ts'

const ClienteEdit = () => {
  const { id } = useParams()
  const Cliente = PegarClientePorId(id)

  
  return (
    <div >
      <Header />
      <PageFrame>
        {Cliente.map((clienteMapa) => {
          return (
            <Box key={clienteMapa.Matricula}>
              <Text>{clienteMapa.nome}</Text>
              <Text>{clienteMapa.Matricula}</Text>
              <Text>{clienteMapa.status}</Text>
              <Text>{clienteMapa.responsavel}</Text>
              <Text>{clienteMapa.estabelecimento}</Text>
            </Box>
          )
        })}
      </PageFrame>
    </div>
  )
}

export default ClienteEdit
