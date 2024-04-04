
import {
    collection,
    DocumentData,
    getDocs,
    getFirestore
  } from 'firebase/firestore'

async function FuncionarioID() {

    const ExistingIds = await GetFuncIds()
    const existingIds = ExistingIds.map((esp) => esp.id)
    const numericIds = existingIds.map(Number) 

    const NewId = Math.max(...numericIds) + 1
   
    console.log(NewId)

    return NewId
    
}




  async function GetFuncIds() {
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'funcionario'))
    const FuncionarioID = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return FuncionarioID
}

export  {GetFuncIds , FuncionarioID}