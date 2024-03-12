import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import React from 'react'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'


const ModalNovoCliente = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen}>Novo Cliente</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Novo Cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input ref={initialRef} placeholder="First name" />

              <FormLabel>CPF</FormLabel>
              <Input placeholder="CPF" />

              <FormLabel>Endereço</FormLabel>
              <Input placeholder="Endereço" />

              <FormLabel>Telefone</FormLabel>
              <Input placeholder="Telefone" />

              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalNovoCliente
