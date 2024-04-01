import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter, 
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function NavLeft() {
  const { isOpen, onOpen, onClose } = useDisclosure() 

  return (
    <>
      <button onClick={onOpen}>
        |||
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={'xs'}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor="#104697"
          color="white"
          maxHeight={'80vh'}
          borderRightRadius={'20px'}
          marginTop={'100px'}
          marginBottom={'10px'}
        >
          <DrawerCloseButton />
          <DrawerHeader>Nome da conta</DrawerHeader>

          <DrawerBody display={'flex'} flexDirection={'column'}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/cliente">Cliente</Link>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavLeft
