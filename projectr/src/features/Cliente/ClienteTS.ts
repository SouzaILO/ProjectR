import Cliente from "../../Json/Clientes.json";
export const FiltrarClienteLogic = (InputFiltro) => {
  const clientesFiltrados = Cliente.filter((cliente) => {
    return (
      cliente.cpf.includes(InputFiltro.Filtro) ||
      cliente.nome.toLowerCase().includes(InputFiltro.Filtro.toLowerCase()) ||
      cliente.email.toLowerCase().includes(InputFiltro.Filtro.toLowerCase())
    );
  });

  return clientesFiltrados;
};

// Pegar dados do cliente por id

// Path: src/features/Cliente/ClienteTS.tS

export const PegarClientePorId = (id) => {
  const clientesFiltrados = Cliente.filter((cliente) => {
    if (cliente.id == id) {
      return cliente;
    } else {
      return null;
    }
  });
  return clientesFiltrados;
};
