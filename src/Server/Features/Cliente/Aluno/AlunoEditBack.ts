import {
    addDoc,
    collection,
    doc,
    Firestore,
    getFirestore,
    setDoc,
    updateDoc,
  } from 'firebase/firestore'


const AlunoEditServer = async (AlunoForm) => {
   
    
    try {
        const db = getFirestore()
             
        
        await updateDoc(doc(db, 'Alunos', AlunoForm.id.toString()), {
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

    
        console.log('Aluno editado com sucesso!')
        return
    } catch (error) {
        console.log('Erro ao editado Aluno', error)
        return 'Erro ao cadastrar Aluno'
    }

}

export default AlunoEditServer