import { Cliente } from '../../../Data/ClienteData.ts' 
export const FiltrarClienteLogic = (InputFiltro) => {
  const Filtro = InputFiltro.Filtro
  const Check = InputFiltro.FiltroAtivo

  const clientesFiltrados = Cliente.filter((cliente) => {
    if (Check == true) {
      return (
        cliente.nome.toLowerCase().includes(Filtro.toLowerCase()) &&
        cliente.status == 'Ativo'
      )
    }
    return cliente.nome.toLowerCase().includes(Filtro.toLowerCase())
  })

  return clientesFiltrados
}

// Pegar dados do cliente por id

// Path: src/features/Cliente/ClienteTS.tS


export const PegarClientePorId = (Matricula) => {
  const clientesFiltrados = Cliente.filter((cliente) => {
    if (cliente.Matricula == Matricula) {
      return cliente
    } else {
      return null
    }
  })
  return clientesFiltrados
}
