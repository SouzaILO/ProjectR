import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'
  import React from "react";
import { Link } from 'react-router-dom';

function NavLeft() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return ( 
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        NavLeft
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
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

          <DrawerBody
          display={'flex'}
          flexDirection={'column'}         
          >
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/cliente">Cliente</Link>

          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavLeft