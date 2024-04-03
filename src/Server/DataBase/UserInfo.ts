
import { getAuth } from 'firebase/auth'
import {
    collection,
    getDocs,
    getFirestore
  } from 'firebase/firestore'
import { login } from '../../Redux/features/user.ts'
import store from '../../Redux/store.ts'



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

    store.dispatch(login(userredux))

    return userredux
            
}
export default GetCurrentUser