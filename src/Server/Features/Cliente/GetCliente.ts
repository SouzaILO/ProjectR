import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where
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

  console.log('Filtro: ', Filtro)
  const db = getFirestore()

  
  try {
    const docRef = doc(db, 'Cliente', Filtro)
    const docSnap = await getDoc(docRef)
    const Alunos =  docSnap.data()
    
    const clientes = [Alunos]
    console.log('Clientes:', clientes)
    if (!docSnap.exists()) {
      console.log('Cliente não encontrado')
      return []
    }

    return clientes
  } catch (error) {
    console.error('Erro ao buscar cliente:', error)
    return []// Retorna um array vazio em caso de erro
  }
}

export default GetCliente
export { GetClienteByID }