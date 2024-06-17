
import {
    addDoc,
    collection,
    getFirestore
  } from 'firebase/firestore'
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
    } catch (error) {
        console.log('Erro ao cadastrar Cliente', error)
    }

}

export default NovoCliente