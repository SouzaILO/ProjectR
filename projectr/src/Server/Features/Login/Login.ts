import DbConnect from '../../DataBase/Dbconnect.ts'
import { collection, doc } from 'firebase/firestore'


const login = async (Login) => {
    
   
    const collectionUser = collection(DbConnect, 'User')
    

    //cHECK IF THE DATA IN lOGIN MATCHES WITH ANY DATA IN THE DATABASE

    const docRef = doc(collectionUser, 'User')

}

export default login