import { Flex } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types' 
import NavLeft from '../Nav/NavLeft.tsx'



//TODP: Criar um componente que será o frame de todas as páginas
// Esse componente terá um menu lateral e o conteudo da pagina mudaado de aordo com os componentes filhos
// O menu lateral será um componente separado para melhor controle
// O header será um componente separado

type Props = {
  children?: React.ReactNode
};

const PageFrame : React.FC<Props> = ({ children }) => {

  //children validation using prop types

  PageFrame.propTypes = {
    children: PropTypes.node.isRequired,
  }



  return (
    <Flex>
      <Flex w="100%" h="100%" backgroundColor="gray.700" position={'fixed'}>
        <Flex
          id="MainContent"
          backgroundColor={'blue.200'}
          width={'100%'}
          height={'100%'}
        >
          
          <Flex padding={'10px'} w={'100%'} h={'100%'} bg={'gray.600'}>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PageFrame
