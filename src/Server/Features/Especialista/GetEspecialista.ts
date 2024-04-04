import {
    collection,
    DocumentData,
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

export default GetEspecialista
