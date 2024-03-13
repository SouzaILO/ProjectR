import { funcionarios } from '../../../Data/Funcionarios.ts'
export const FiltrarFuncionario = (InputFiltro) => {
    const Filtro = InputFiltro.Filtro
    const Check = InputFiltro.FiltroAtivo
  
    const FuncionariosFiltrados = funcionarios.filter((funcionarios) => {
      if (Check == true) {
        return (
          funcionarios.nome.toLowerCase().includes(Filtro.toLowerCase()) &&
          funcionarios.status == 'Ativo'
        )
      }
      return funcionarios.nome.toLowerCase().includes(Filtro.toLowerCase())
    })
  
    return FuncionariosFiltrados
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