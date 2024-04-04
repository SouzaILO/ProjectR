import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { funcionarios } from '../../../Data/Funcionarios.ts'
export const FiltrarFuncionario = async (InputFiltro) => {
    const Filtro = InputFiltro.Filtro
    const Check = InputFiltro.FiltroAtivo 
  
 
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'funcionario'))
    const Funcinarios = querySnapshot.docs.map((doc) => doc.data())


   const FuncinariosFiltrados = Funcinarios.filter((funcinarios) => {
    
        if (Check == true) {
            return (
                funcinarios.Nome.toLowerCase().includes(Filtro.toLowerCase()) &&
                funcinarios.status == 'Ativo'
            )
          }
          return funcinarios.Nome.toLowerCase().includes(Filtro.toLowerCase())
        }
    )
    
    return FuncinariosFiltrados
}

  export const PegarFuncionarioPorId = (ID) => {
    const FuncionariosFiltrados = funcionarios.filter((funcionarios) => {
      if (funcionarios.ID == ID) {
        return funcionarios
      } else {
        return null
      }
    })
    return FuncionariosFiltrados
  }