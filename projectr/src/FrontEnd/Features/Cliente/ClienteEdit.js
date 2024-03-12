import React from 'react'
import Header from '../../../FrontEnd/Components/Nav/Header'
import PageFrame from '../../Components/Frames/PageFrame'
import { useParams } from 'react-router'
import { Box, Text } from '@chakra-ui/react'
import { PegarClientePorId } from '../../../Server/Features/Cliente/ClienteTS.ts'

const ClienteEdit = () => {
  const { id } = useParams()
  const Cliente = PegarClientePorId(id)

  
  return (
    <div width={'100%'} height={'100%'}>
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
