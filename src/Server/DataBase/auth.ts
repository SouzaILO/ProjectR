import { useDispatch } from 'react-redux'
import { getAuth } from 'firebase/auth'
import {
    collection,
    getDocs,
    getFirestore
  } from 'firebase/firestore'
import { login } from '../../Redux/features/user.ts'
import store from '../../Redux/store.ts'



function SetUserRedux () {
    let UserNome  = ''
    let  UserPerm = 0

    const auth = getAuth()
    const db = getFirestore()

   
    
    const querySnapshot =  getDocs(collection(db, 'User'))

    
    querySnapshot.then((doc) => {
        doc.forEach((doc) => {
            
            if (doc.id === auth.currentUser?.uid) {
                UserPerm = doc.data().Perm
                UserNome = doc.data().Name
                
                console.log(UserPerm)
                console.log(UserNome)
    
        }
    })
        if (auth.currentUser?.email) {

            const userRedux = {
                Nome: UserNome,
                Email: auth.currentUser.email,
                Perm: UserPerm
            }

            store.dispatch(login(userRedux))

            
        }
        })
        
return null 

}
export default SetUserRedux