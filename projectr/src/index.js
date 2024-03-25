import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './FrontEnd/Features/Login/login.tsx'
import Home from './FrontEnd/Features/Home/home.tsx'
import Cliente from './FrontEnd/Features/Cliente/Cliente.tsx'
import ClienteEdit from './FrontEnd/Features/Cliente/ClienteEdit.tsx'
import FuncionarioEdit from './FrontEnd/Features/Funcionarios/FuncionarioEdit.tsx'
import ClienteNovo from './FrontEnd/Features/Cliente/NovoCliente.tsx'
import NovoFuncionario from './FrontEnd/Features/Funcionarios/NovoFuncionario.tsx'
import Funcionarios from './FrontEnd/Features/Funcionarios/Funcionario.tsx'
import Agenda from './FrontEnd/Features/Agenda/agenda.tsx'
import AgendaIndividual from './FrontEnd/Features/Agenda/AgendaIndividual.tsx'
import { ChakraProvider } from '@chakra-ui/react'




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/cliente/:id" element={<ClienteEdit />} />
          <Route path="/Cadastro/Cliente" element={<ClienteNovo />} />
          <Route path="/Cadastro/funcionario" element={<NovoFuncionario />} />
          <Route path="/funcionario" element={<Funcionarios />} />
          <Route path="/funcionario/:id" element={<FuncionarioEdit />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/agenda/individual" element={<AgendaIndividual />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

