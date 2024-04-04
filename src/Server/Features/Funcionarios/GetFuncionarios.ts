import {
    collection,
    DocumentData,
    getDocs,
    getFirestore
  } from 'firebase/firestore'

async function GetFuncionarios(Filtro) {

    const FiltroIn = Filtro.Filtro
    const Check = Filtro.FiltroAtivo 
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'Especialista'))
    const Funcinarios = querySnapshot.docs.map((doc) => doc.data())


   const FuncinariosFiltrados = Funcinarios.filter((funcinarios) => {
    
        if (Check == true) {
            return (
                funcinarios.Nome.toLowerCase().includes(FiltroIn.toLowerCase()) &&
                funcinarios.status == 'Ativo'
            )
          }
          return funcinarios.nome.toLowerCase().includes(FiltroIn.toLowerCase())
        }
    )
    
    return FuncinariosFiltrados
}

export default GetFuncionarios
