import { getAuth } from 'firebase/auth'
import {
  collection,
  getDocs,
  getFirestore
} from 'firebase/firestore'
import { useState } from 'react'






const UserPerm = () => {

    
    const [UserName , setUserName] = useState('')
    const [UserPerm, setUserperm] = useState(0)

    const auth = getAuth()

    const db = getFirestore()

    const querySnapshot =  getDocs(collection(db, 'User'))

    querySnapshot.then((doc) => {
    doc.forEach((doc) => {
        
        if (doc.id === auth.currentUser?.uid) {
            setUserperm(doc.data().Perm)
            setUserName(doc.data().Name)

    }

})
    })


  return (
      {
        UserName,
        UserPerm
      }
  )
}

export default UserPerm