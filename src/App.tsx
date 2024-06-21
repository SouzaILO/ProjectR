import React from 'react' // Import the 'React' module
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import Login from './FrontEnd/Features/Login/login.tsx'
import Home from './FrontEnd/Features/Home/home.tsx'
import Alunos from './FrontEnd/Features/Cliente/Alunos.tsx'
import AlunosEdit from './FrontEnd/Features/Cliente/Aluno/AlunosEdit.tsx'
import FuncionarioEdit from './FrontEnd/Features/Funcionarios/FuncionarioEdit.tsx'
import NovoAluno from './FrontEnd/Features/Cliente/Aluno/NovoAluno.tsx'
import NovoFuncionario from './FrontEnd/Features/Funcionarios/NovoFuncionario.tsx'
import Funcionarios from './FrontEnd/Features/Funcionarios/Funcionario.tsx'
import Agenda from './FrontEnd/Features/Agenda/agenda.tsx'
import AgendaIndividual from './FrontEnd/Features/Agenda/AgendaIndividual.tsx'
import { firebaseConfig } from './Server/DataBase/firebaseConfig.ts'
import AuthRoute from './FrontEnd/Components/Routes/AuthRoute.tsx'
import ContaEdit from './FrontEnd/Features/Conta/ContaEdit.tsx'
import Especialista from './FrontEnd/Features/Especialista/Especialista.tsx'
import NovoEspecialista from './FrontEnd/Features/Especialista/NovoEspecialista.tsx'


   



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
              <Route path="/Alunos" 
                      element={
                        <AuthRoute>
                          <Alunos />
                        </AuthRoute>} />
              <Route path="/Aluno/:id" element={<AuthRoute><AlunosEdit /></AuthRoute>} />
              <Route path="/Cadastro/Aluno" element={<AuthRoute><NovoAluno /></AuthRoute>} />
              <Route path="/Cadastro/funcionario" element={<AuthRoute><NovoFuncionario /></AuthRoute>} />
              <Route path="/Cadastro/especialista" element={<AuthRoute><NovoEspecialista /></AuthRoute>} />
              <Route path="/funcionario" element={<AuthRoute><Funcionarios /></AuthRoute>} />
              <Route path="/funcionario/:id" element={<AuthRoute><FuncionarioEdit /></AuthRoute>} />
              <Route path="/agenda" element={<AuthRoute><Agenda /></AuthRoute>} />
              <Route path="/agenda/individual" element={<AuthRoute><AgendaIndividual /></AuthRoute>} />
              <Route path="/contaEdit" element={<AuthRoute><ContaEdit /></AuthRoute>} />
              <Route path="/especialista" element={<AuthRoute><Especialista /></AuthRoute>} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  )
}



export default App
