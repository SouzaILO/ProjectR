
import {
    addDoc,
    collection,
    getFirestore
  } from 'firebase/firestore'
import { redirect } from 'react-router'
  import { ClienteID } from './ClienteID.ts'
import { anoEscolar, nivelEscolar } from '../../../Data/ClienteData.ts'
const NovoCliente = async (ClienteForm) => {

    const id = await ClienteID()
    
    
    const cliente = {
        id: id ,
        Nome: ClienteForm.nome,    
        DataNascimento: ClienteForm.dataNascimento,
        Status: ClienteForm.status,
        Responsavel: ClienteForm.responsavel,
        Sexo: ClienteForm.sexo,
        EstabelecimentoEnsino: ClienteForm.estabelecimentoEnsino,
        anoEscolar: ClienteForm.anoEscolar,
        nivelEscolar: ClienteForm.nivelEscolar,
        Endereco: ClienteForm.endereco

    }
    try {
        const db = getFirestore()
        await addDoc(collection(db, 'Cliente'), cliente)
        
        console.log('Cliente cadastrado com sucesso!')
        return
    } catch (error) {
        console.log('Erro ao cadastrar Cliente', error)
        return 'Erro ao cadastrar Cliente'
    }

}

export default NovoCliente