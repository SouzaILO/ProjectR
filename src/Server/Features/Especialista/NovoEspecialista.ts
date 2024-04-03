
import {
    addDoc,
    collection,
    getFirestore
  } from 'firebase/firestore'
  import { EspecialistID } from '../../../Server/Features/Especialista/EspecialistID.ts'
const NovoEspecialista = async (EspcForm) => {

    const id = await EspecialistID()
    
    
    const especialista = {
        id: id ,
        Nome: EspcForm.nome,    
        cpf: EspcForm.cpf,
        cnpj: EspcForm.cnpj,
        especialidade: EspcForm.especialidade,
        status: EspcForm.status
    }
    console.log(especialista)
    console.log(EspcForm)
    try {
        const db = getFirestore()
        await addDoc(collection(db, 'Especialista'), especialista)
        
        console.log('Especialista cadastrado com sucesso!')
    } catch (error) {
        console.log('Erro ao cadastrar especialista', error)
    }

}

export default NovoEspecialista