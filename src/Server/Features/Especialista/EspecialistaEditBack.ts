import {
    doc,
    getFirestore,
    updateDoc,
  } from 'firebase/firestore'


const EspecialistaEditServer = async (EspecialistaForm) => {
   
    
    try {
        const db = getFirestore()
             
        
        await updateDoc(doc(db, 'Especialista', EspecialistaForm.id.toString()), {
            id: EspecialistaForm.id ,
            Nome: EspecialistaForm.nome,    
            cpf: EspecialistaForm.cpf,
            cnpj: EspecialistaForm.cnpj,
            especialidade: EspecialistaForm.especialidade,
            status: EspecialistaForm.status
        })
            
        console.log('EspecialistaForm editado com sucesso!')
        return
    } catch (error) {
        console.log('Erro ao editado EspecialistaForm', error)
        return 'Erro ao cadastrar EspecialistaForm'
    }

}

export default EspecialistaEditServer