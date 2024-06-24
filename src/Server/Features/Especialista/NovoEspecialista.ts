
import {
    doc,
    getFirestore,
    setDoc
  } from 'firebase/firestore'
  import { EspecialistID } from '../../../Server/Features/Especialista/EspecialistID.ts'
const NovoEspecialista = async (EspecialistaForm) => {

    const id = await EspecialistID()

    const especialista = {
        id: id ,
        Nome: EspecialistaForm.nome,    
        cpf: EspecialistaForm.cpf,
        cnpj: EspecialistaForm.cnpj,
        especialidade: EspecialistaForm.especialidade,
        status: EspecialistaForm.status
    }
    try {
        const db = getFirestore()


        await setDoc(doc(db, 'Especialista', id.toString()), { 
            id: id ,
            Nome: EspecialistaForm.nome,    
            cpf: EspecialistaForm.cpf,
            cnpj: EspecialistaForm.cnpj,
            especialidade: EspecialistaForm.especialidade,
            status: EspecialistaForm.status
         })
        
        console.log('Especialista cadastrado com sucesso!')
    } catch (error) {
        console.log('Erro ao cadastrar especialista', error)
    }

}

export default NovoEspecialista