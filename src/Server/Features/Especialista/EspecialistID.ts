

import {
    collection,
    DocumentData,
    getDocs,
    getFirestore
  } from 'firebase/firestore'

async function EspecialistID() {

    const ExistingIds = await GetEspecialistaIds()
    const existingIds = ExistingIds.map((esp) => esp.id)
    const numericIds = existingIds.map(Number) 

    const NewId = Math.max(...numericIds) + 1
   
    console.log(NewId)

    return NewId
    
}




  async function GetEspecialistaIds() {
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'Especialista'))
    const EspecialistaIds = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return EspecialistaIds
}

export  {GetEspecialistaIds , EspecialistID}