import {
    collection,
    getDocs,
    getFirestore
  } from 'firebase/firestore'

async function ClienteID() {

    const ExistingIds = await GetClienteIds()
    const existingIds = ExistingIds.map((esp) => esp.id)
    const numericIds = existingIds.map(Number) 

    const NewId = Math.max(...numericIds) + 1
   
    console.log(NewId)

    return NewId
    
}




  async function GetClienteIds() {
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'Cliente'))
    const EspecialistaIds = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return EspecialistaIds
}

export  {GetClienteIds , ClienteID}