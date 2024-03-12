import { Link } from 'react-router-dom'
import React from 'react'
import PageFrame from '../../Components/Frames/PageFrame'
import Header from '../../../FrontEnd/Components/Nav/Header'
import { Button, Checkbox, Flex, Input } from '@chakra-ui/react'
import TableComponent from '../../Components/Tabelas/TableCliente'
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

          <TableComponent Filtro={FiltroIn} FiltroAtivo={FiltroAtivo} />
        </Flex>
      </PageFrame>
    </div>
  )
}

export default Cliente
