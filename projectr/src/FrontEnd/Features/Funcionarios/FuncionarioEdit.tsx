import React from 'react'
import Header from '../../Components/Nav/Header.tsx'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import { useParams } from 'react-router'
import { Box, Text } from '@chakra-ui/react'
import { PegarFuncionarioPorId } from '../../../Server/Features/Funcionarios/TabelaFuncionarioLogica.ts'

const FuncionarioEdit = () => {
  const { id } = useParams()
  const funcionario = PegarFuncionarioPorId(id)

  
  return (
    <div >
      <Header />
      <PageFrame>
        {funcionario.map((funcionario) => {
          return (
            <Box key={funcionario.ID}>
                <Text>{funcionario.ID}</Text>
              <Text>{funcionario.nome}</Text>               
              <Text>{funcionario.status}</Text>
              <Text>{funcionario.cpf}</Text>
              <Text>{funcionario.posicao}</Text>
            </Box>
          )
        })}
      </PageFrame>
    </div>
  )
}

export default FuncionarioEdit