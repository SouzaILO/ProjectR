import React from 'react'
import { useState } from 'react'
import { Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Nav/Header.tsx'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import TabelaEspecialista from '../../Components/Tabelas/TabelaEspecialista.tsx'

const Especialista =  () => {
  const [FiltroIn, setFiltroIn] = useState('')
  const [FiltroAtivo, setFiltroAtivo] = useState(true)
  
 
  const handeCheckFiltro = () => {
    setFiltroAtivo(!FiltroAtivo)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setFiltroIn(FiltroIn)
  }


  return (
    <div>
      <Header />
      <PageFrame>
        <Flex
          display={'flex'}
          flexDirection={'column'}
          margin={'10px'}
          w={'100%'}
          h={'100%'}
        >
          <Flex>
          <Flex w={'100%'} h={'10%'}>
            <form onSubmit={handleSubmit}>
              <Input
                border="1px"
                focusBorderColor="gray.900"
                bg={'white'}
                width={'100%'}
                margin={'10px'}
                type="text"
                placeholder="Filtro de funcionario"
                value={FiltroIn}
                onChange={(e) => setFiltroIn(e.target.value)}
              />
              <Checkbox
                colorScheme="green"
                mb={'10px'}
                ml={'10px'}
                onChange={(e) => handeCheckFiltro()}
                defaultChecked
              >
                Mostrar Ativos
              </Checkbox>
            </form>
            
          </Flex>
          <Text color={'white'} size={'lg'} mr={'50%'}> Especialistas </Text>
          <Link
              to={'/Cadastro/especialista'}
          >
              <Button>Novo Especialista</Button>
            </Link>
          </Flex>
          <TabelaEspecialista Filtro={FiltroIn} FiltroAtivo={FiltroAtivo} />
        </Flex>
      </PageFrame>
    </div>
  )
}

export default Especialista
