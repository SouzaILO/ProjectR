import { Link } from 'react-router-dom'
import React, { Suspense } from 'react'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import Header from '../../Components/Nav/Header.tsx'
import { Button, Checkbox, Flex, Input } from '@chakra-ui/react'
import TabelaCliente from '../../Components/Tabelas/TableCliente.tsx'
import { useState } from 'react'


//TODO Fazer com que cada fileira da tabela seja clicavel e redirecione para a pagina de detalhes do cliente OU abrir um modal com os detalhes do cliente

const Cliente = () => {
  const [FiltroIn, setFiltroIn] = useState('')
  const [FiltroAtivo, setFiltroAtivo] = useState(false)

  const handeCheckFiltro = () => {
    setFiltroAtivo(!FiltroAtivo)
  }

  const handleSubmit = (e) => {
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
                  placeholder="Filtro de Cliente"
                  value={FiltroIn}
                  onChange={(e) => setFiltroIn(e.target.value)}
                />
                <Checkbox
                  colorScheme="green"
                  margin={'10px'}
                  onChange={(e) => handeCheckFiltro()}
                >
                  Mostrar Ativos
                </Checkbox>
              </form>
            </Flex>
            <Link to={'/Cadastro/Cliente'}>
              <Button>Novo Cliente</Button>
            </Link>
          </Flex>
          <Suspense fallback={<Loading />}>
          <TabelaCliente Filtro={FiltroIn} FiltroAtivo={FiltroAtivo} />
          </Suspense>
        </Flex>
      </PageFrame>
    </div>
  )
}

function Loading() {
  console.log('loading')
  return (
    <div>
      <p>Loading...</p>
    </div>
  )
}

export default Cliente
