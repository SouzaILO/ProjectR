import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/pt-br'
import React from 'react'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './AgendaCalendario.css'

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer
const messages = {
  allDay: 'Dia Inteiro',
  previous: 'Voltar',
  next: 'Próximo',
  today: 'Hoje',
  month: 'Mês',
  week: 'Semana',
  day: 'Dia',
  agenda: 'Agenda',
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
}
const eventTeste = [
  {
  
    title: 'Aula 1',
    start: '2024-06-06T09:00:00',
    end: '2024-06-06T10:00:00',
  },
  {
    title: 'Aula 2',
    start: '2024-06-06T10:00:00',
    end: '2024-06-06T11:00:00',
  },
  {
    title: 'Aula 3',
    start: '2024-06-06T11:00:00',
    end: '2024-06-06T12:00:00',
  },
  {
    title: 'Aula 4',
    start: '2024-06-06T14:00:00',
    end: '2024-06-06T15:00:00',
  }
]

 const BigAgenda = (props) => (
  <div  className="Calendario">
    <Calendar
      messages={messages}
      localizer={localizer}
      events={
        
         eventTeste
        
      }
      startAccessor="start"
      endAccessor="end"
    />
    
  </div>
)

export default BigAgenda