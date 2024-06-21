import {
    addDoc,
    collection,
    doc,
    getFirestore,
    setDoc
  } from 'firebase/firestore'
import { AlunoIDGen } from './AlunosID.ts'
import { anoEscolar, nivelEscolar } from '../../../../Data/ClienteData.ts'


const NovoAlunoServer = async (AlunoForm) => {

    const id = await AlunoIDGen()
    
    
    const Aluno = {
        id: id ,
        Nome: AlunoForm.nome,    
        DataNascimento: AlunoForm.dataNascimento,
        Status: AlunoForm.status,
        Responsavel: AlunoForm.responsavel,
        Sexo: AlunoForm.sexo,
        EstabelecimentoEnsino: AlunoForm.estabelecimentoEnsino,
        anoEscolar: AlunoForm.anoEscolar,
        nivelEscolar: AlunoForm.nivelEscolar,
        Endereco: AlunoForm.endereco

    }
    try {
        const db = getFirestore()
        
        await setDoc(doc(db, 'Alunos', id.toString()), { 
            id: id ,
            Nome: AlunoForm.nome,    
            DataNascimento: AlunoForm.dataNascimento,
            Status: AlunoForm.status,
            Responsavel: AlunoForm.responsavel,
            Sexo: AlunoForm.sexo,
            EstabelecimentoEnsino: AlunoForm.estabelecimentoEnsino,
            anoEscolar: AlunoForm.anoEscolar,
            nivelEscolar: AlunoForm.nivelEscolar,
            Endereco: AlunoForm.endereco
         })
        
        console.log('Aluno cadastrado com sucesso!')
        return
    } catch (error) {
        console.log('Erro ao cadastrar Aluno', error)
        return 'Erro ao cadastrar Aluno'
    }

}

export default NovoAlunoServer