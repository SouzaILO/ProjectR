
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react' // Import React package

import PropTypes from 'prop-types'
import NavLeft from './NavLeft.tsx'
import { getAuth, signOut } from 'firebase/auth'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
)
MenuItems.propTypes = {
  children: PropTypes.node.isRequired,
}

const Header = (props) => {
  const auth = getAuth()
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      h="40px"
      bg="blue.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5} ml={'50px'}>
        <Link to={'/'}>
          <img
            src={require('../../../assets/img/resolucaologo.png')}
            alt="resolucaoLogo"
            width="50px"
            height="50px"
          />
        </Link>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >

        <MenuItems>
          <NavLeft />
        </MenuItems>
        <MenuItems>
          <Link to={'/'}>Home</Link>
        </MenuItems>
        <MenuItems >
          <Link to={'/Agenda'}>Agenda</Link>
        </MenuItems>

        <MenuItems>
          <Link to={'/Cliente'}>Clientes</Link>
        </MenuItems>
        <MenuItems>
          <Link to={'/Funcionario'}>Funcionários</Link>
        </MenuItems>

      </Box>
            <Box
              display={{ sm: show ? 'block' : 'none', md: 'block' }}
              mt={{ base: 4, md: 0 }}
              mr={'50px'}
            >
              <Button bg="transparent" border="1px" marginRight={'10px'} size={'sm'} onClick={() => signOut(auth)}>
                Sair
              </Button>
            </Box>
    </Flex>
  )
}

export default Header
