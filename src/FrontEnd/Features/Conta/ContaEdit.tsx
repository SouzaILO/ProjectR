import React, { useEffect, useState } from 'react'
import { Box, Input, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Header from '../../Components/Nav/Header.tsx'
import PageFrame from '../../Components/Frames/PageFrame.tsx'
import { RootState } from '../../../Redux/store.ts'
import GetCurrentUser from '../../../Server/DataBase/UserInfo.ts'

const ContaEdit = () => {

    const user = GetCurrentUser()
    

    const [userInfo, setUserInfo] = useState({
        Nome: '',
        Email: '',
        Perm: ''
    
    }) 
    useEffect(() => {
        user.then((value) => {
            console.log(value.Perm)
                setUserInfo(
                    {
                        Nome: value.Nome,
                        Email: value.Email ?? '',
                        Perm: value.Perm.toString()
                    }
                )
        }
            )
    }, [])


    return (
        
        <div>
            <Header/>
            <PageFrame>

                <Box>
                    <Text color={'White'}>Conta Edit</Text>

                    <Input placeholder="Nome" defaultValue={userInfo.Nome} bg={'white'} />
                    <Input placeholder="Email" defaultValue={userInfo.Email} bg={'white'}/>
                    <Input placeholder="Perm" defaultValue={ userInfo.Perm } bg={'white'}/> 
                </Box>


            </PageFrame>
        </div>
        
    )
}

export default ContaEdit
