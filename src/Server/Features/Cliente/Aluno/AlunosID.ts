import {
    collection,
    getDocs,
    getFirestore
  } from 'firebase/firestore'

async function AlunoIDGen() {

    const ExistingIds = await GetAlunosIDs()
    const existingIds = ExistingIds.map((esp) => esp.id)
    const numericIds = existingIds.map(Number) 

    const NewId = Math.max(...numericIds) + 1
   
    console.log(NewId)

    return NewId
    
}




  async function GetAlunosIDs() {
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'Alunos'))
    const AlunosIds = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return AlunosIds
}

export  {GetAlunosIDs  , AlunoIDGen }