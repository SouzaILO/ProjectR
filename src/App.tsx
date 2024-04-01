import React from 'react' // Import the 'React' module
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
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
import { firebaseConfig } from './Server/DataBase/firebase.ts'
import AuthRoute from './FrontEnd/Components/Routes/AuthRoute.tsx'
import UserPerm from './Server/DataBase/UserPerm.tsx'

 



export const app = initializeApp(firebaseConfig)


export interface IApplicationProps {
  children: React.ReactNode
}



const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
      <BrowserRouter> 
          <Routes>
          
              <Route
                  path="/"
                  element={
                      <AuthRoute>
                        <Home/>
                      </AuthRoute>
                  }
              />
              <Route path="/cliente" 
                      element={
                        <AuthRoute>
                          <Cliente />
                        </AuthRoute>} />
              <Route path="/cliente/:id" element={<AuthRoute><ClienteEdit /></AuthRoute>} />
              <Route path="/Cadastro/Cliente" element={<AuthRoute><ClienteNovo /></AuthRoute>} />
              <Route path="/Cadastro/funcionario" element={<AuthRoute><NovoFuncionario /></AuthRoute>} />
              <Route path="/funcionario" element={<AuthRoute><Funcionarios /></AuthRoute>} />
              <Route path="/funcionario/:id" element={<AuthRoute><FuncionarioEdit /></AuthRoute>} />
              <Route path="/agenda" element={<AuthRoute><Agenda /></AuthRoute>} />
              <Route path="/agenda/individual" element={<AuthRoute><AgendaIndividual /></AuthRoute>} />
              
                      
              <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  )
}



export default App
