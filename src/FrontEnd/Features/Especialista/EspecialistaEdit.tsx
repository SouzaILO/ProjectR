import React from 'react'
import Header from '../../Components/Nav/Header.tsx' // Corrected file path
import PageFrame from '../../Components/Frames/PageFrame.tsx'

import EditSpecialistForm from '../../Components/Formulario/EditEspecialistaForm.tsx'


const ClienteEdit = () => {

  return (
    <div>
      <Header />
      <PageFrame>
        <EditSpecialistForm/>
      </PageFrame>
    </div>
  )
}

export default ClienteEdit
