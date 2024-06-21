import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where
  } from 'firebase/firestore'

async function GetAluno(Filtro) {

    const FiltroIn = Filtro.Filtro
    const Check = Filtro.FiltroAtivo 
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'Alunos'))
    const Alunos = querySnapshot.docs.map((doc) => doc.data())

  

   const AlunosFiltrados = Alunos.filter((alunos) => {
    
        if (Check == false) {
            return (
                alunos.Nome.toLowerCase().includes(FiltroIn.toLowerCase()) &&
                alunos.Status == 'Ativo'
            )
          }
          return alunos.Nome.toLowerCase().includes(FiltroIn.toLowerCase()) 
        }
    )
    
    return AlunosFiltrados
}

async function GetAlunosByID(Filtro) {


  const db = getFirestore()

  
  try {
    const docRef = doc(db, 'Alunos', Filtro)
    const docSnap = await getDoc(docRef)
    const Alunos =  docSnap.data()
    
    const alunosArray = [Alunos]
    
    if (!docSnap.exists()) {
      
      return []
    }

    return alunosArray
  } catch (error) {
    console.error('Erro ao buscar Alunos:', error)
    return []// Retorna um array vazio em caso de erro
  }
}

export default GetAluno
export { GetAlunosByID }