import {
    collection,
    getDocs,
    getFirestore
  } from 'firebase/firestore'

async function GetCliente(Filtro) {

    const FiltroIn = Filtro.Filtro
    const Check = Filtro.FiltroAtivo 
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'Cliente'))
    const Clientes = querySnapshot.docs.map((doc) => doc.data())


   const ClientesFiltrados = Clientes.filter((clientes) => {
    
        if (Check == true) {
            return (
                clientes.Nome.toLowerCase().includes(FiltroIn.toLowerCase()) &&
                clientes.status == 'Ativo'
            )
          }
          return clientes.Nome.toLowerCase().includes(FiltroIn.toLowerCase())
        }
    )
    
    return ClientesFiltrados
}

export default GetCliente