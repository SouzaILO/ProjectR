import { Link } from 'react-router-dom'
import React, { Suspense } from 'react'
import { useState } from 'react'
import { Button, Checkbox, Flex, Input } from '@chakra-ui/react'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import Header from '../../Components/Nav/Header.tsx'
import TabelaAlunos from '../../Components/Tabelas/TabelaAlunos.tsx'


//TODO Fazer com que cada fileira da tabela seja clicavel e redirecione para a pagina de detalhes do cliente OU abrir um modal com os detalhes do cliente

const Cliente = () => {
  const [FiltroIn, setFiltroIn] = useState('')
  const [FiltroAtivo, setFiltroAtivo] = useState(false)

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
                  placeholder="Filtro de Cliente"
                  value={FiltroIn}
                  onChange={(e: { target: { value: any } }) => setFiltroIn(e.target.value)}
                />
                <Checkbox
                  colorScheme="green"
                  defaultChecked
                  margin={'10px'} 
                  onChange={(e) => handeCheckFiltro()}
                  onBlur={() => {}}
                  checked={false}
                >
                  Mostrar Ativos
                </Checkbox>
              </form>
            </Flex>
            <Link to={'/Cadastro/Aluno'}>
              <Button>Novo Cliente</Button>
            </Link>
          </Flex>
          <Suspense fallback={<Loading />}>
          <TabelaAlunos Filtro={FiltroIn} FiltroAtivo={FiltroAtivo} />
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
