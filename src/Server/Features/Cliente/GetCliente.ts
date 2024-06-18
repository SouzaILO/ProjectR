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

    console.log(FiltroIn + '  ' + Check) 


   const ClientesFiltrados = Clientes.filter((clientes) => {
    
        if (Check == false) {
            return (
                clientes.Nome.toLowerCase().includes(FiltroIn.toLowerCase()) &&
                clientes.Status == 'Ativo'
            )
          }
          return clientes.Nome.toLowerCase().includes(FiltroIn.toLowerCase()) 
        }
    )
    
    return ClientesFiltrados
}

async function GetClienteByID(Filtro) {

  const FiltroId = Filtro
  const db = getFirestore()
  const querySnapshot = await getDocs(collection(db, 'Cliente'))
  const Clientes = querySnapshot.docs.map((doc) => doc.data())


 const ClientesFiltrados = Clientes.filter((cliente) => {

        console.log(cliente.id.toString() , FiltroId.toString())

        if (cliente.id.toString() == FiltroId) {
          console.log(cliente)
          return cliente
        } else {
          return 'erro'
        }
      }
  )
  
  return ClientesFiltrados
}

export default GetCliente
export { GetClienteByID }