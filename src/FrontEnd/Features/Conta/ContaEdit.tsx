import React from 'react'
import { Box, Input, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Header from '../../Components/Nav/Header.tsx'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import { RootState } from '../../../Redux/store.ts'


const ContaEdit = () => {

   
    const user = useSelector((state: RootState) => state.user.value)

    return (
        
        <div>
            <Header/>
            <PageFrame>

                <Box>
                <Text>Conta Edit</Text>
                <Input placeholder="Nome" defaultValue={user.Nome} bg={'white'} />
                <Input placeholder="Email" defaultValue={user.Email} bg={'white'}/>
                <Input placeholder="Perm" defaultValue={user.Perm} bg={'white'}/>
                </Box>


            </PageFrame>
        </div>
        
    )
}

export default ContaEdit
