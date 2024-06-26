import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/pt-br'
import React from 'react'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './AgendaCalendario.css'
import { getEvents } from '../../../Server/APIS/Calendar/fetch.ts'

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
const eventTeste = []


const BigAgenda  =  () =>{

  const [EventsCalendar , setEventsCalendar] = React.useState([])
  console.log( getEvents())
  React.useEffect(() => {
  
   
  }, [])

  return (
    <div className="Calendario">
      <Calendar
        messages={messages}
        localizer={localizer}
        events={EventsCalendar}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  
  )
}


/* class BigAgenda extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    getEvents(events => {
      this.setState({ events })
    })
  }

  render() {
    return (
      <div className="Calendario">
        <Calendar
          messages={messages}
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    )
  }
} */

export default BigAgenda