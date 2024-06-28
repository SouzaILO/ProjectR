
import { getAuth } from 'firebase/auth'
import {
    collection,
    getDocs,
    getFirestore
  } from 'firebase/firestore'




async function GetCurrentUser () {
    let UserNome  = ''
    let  UserPerm = 0

    const auth = getAuth()
    const db = getFirestore()

   
    
    const querySnapshot = await getDocs(collection(db, 'User'))

    
    
    querySnapshot.forEach((doc) => {
                   
        if (doc.id === auth.currentUser?.uid) {
                UserPerm = doc.data().Perm
                UserNome = doc.data().Name              
    
        }
    })

    const userredux = {
        Nome: UserNome,
        Email: auth.currentUser?.email,
        Perm: UserPerm
    }

    

    return userredux
            
}
export default GetCurrentUser