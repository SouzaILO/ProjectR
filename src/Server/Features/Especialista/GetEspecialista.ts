import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore
  } from 'firebase/firestore'

async function GetEspecialista(Filtro) {

    const FiltroIn = Filtro.Filtro
    const Check = Filtro.FiltroAtivo 
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'Especialista'))
    const Especialistas = querySnapshot.docs.map((doc) => doc.data())


   const EspecialistasFiltrados = Especialistas.filter((especialista) => {
    
        if (Check == true) {
            return (
                especialista.Nome.toLowerCase().includes(FiltroIn.toLowerCase()) &&
                especialista.status == 'Ativo'
            )
          }
          return especialista.Nome.toLowerCase().includes(FiltroIn.toLowerCase())
        }
    )
    
    return EspecialistasFiltrados
}



async function GetEspecialistaByID(Filtro) {


  const db = getFirestore()

  
  try {
    const docRef = doc(db, 'Especialista', Filtro)
    const docSnap = await getDoc(docRef)
    const Especialista =  docSnap.data()
    
    const EspecialistaArray = [Especialista]
    
    if (!docSnap.exists()) {
      return []
    }

    return EspecialistaArray
  } catch (error) {
    console.error('Erro ao buscar Especialista:', error)
    return []// Retorna um array vazio em caso de erro
  }
}

export default GetEspecialista

export { GetEspecialistaByID }
