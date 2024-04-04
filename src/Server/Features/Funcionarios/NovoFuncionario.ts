
import {
    addDoc,
    collection,
    getFirestore
  } from 'firebase/firestore'
  import { FuncionarioID } from './FuncionarioID.ts'
const NovoFuncionario = async (EspcForm) => {

    const id = await FuncionarioID()
    
    
    const Funcionario = {
        id: id ,
        Nome: EspcForm.nome,    
        cpf: EspcForm.cpf,
        cnpj: EspcForm.cnpj,
        posicao: EspcForm.posicao,
        status: EspcForm.status
    }
    console.log(Funcionario)
    console.log(EspcForm)
    try {
        const db = getFirestore()
        await addDoc(collection(db, 'funcionario'), Funcionario)
        
        console.log('Funcionario cadastrado com sucesso!')
    } catch (error) {
        console.log('Erro ao cadastrar Funcionario', error)
    }

}

export default NovoFuncionario