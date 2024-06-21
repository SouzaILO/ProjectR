import React, { useEffect, useState } from 'react'
import { DocumentData } from 'firebase/firestore'
import { useParams } from 'react-router'
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Grid, Input, Select, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Nav/Header.tsx'
import PageFrame from '../../../Components/Frames/PageFrame.tsx'
import { GetAlunosByID } from  '../../../../Server/Features/Cliente/Aluno/GetAlunos.ts'
import { anoEscolar, nivelEscolar, Sexo, Status } from '../../../../Data/ClienteData.ts'
import EditAlunoForm from '../../../Components/Formulario/EditAlunoForm.tsx'

const ClienteEdit = () => {

  return (
    <div>
      <Header />
      <PageFrame>
        <EditAlunoForm/>
      </PageFrame>
    </div>
  )
}

export default ClienteEdit
