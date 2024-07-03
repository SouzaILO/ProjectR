/* eslint-disable @typescript-eslint/no-unused-vars */
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/pt-br'
import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './AgendaCalendario.css'
import fetchData from '../../../Server/APIS/Calendar/fetch'



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




const BigAgenda  =  () =>{

  

  const [EventsCalendar , setEventsCalendar] = React.useState<{ id: number, title: string, start: Date, end: Date }[]>([])

  React.useEffect(() => {

    fetchData().then((data) => {
      console.log(data)
      const events = data.map((event: any, index: number) => {
    // Format the start and end dates as YYYY-MM-DD
    const formattedStart = event.start.dateTime ? event.start.dateTime.split('T')[0] : event.start.date; // Handle both dateTime and date formats
    const formattedEnd = event.end.dateTime ? event.end.dateTime.split('T')[0] : event.end.date;

    return {
      id: index,
      title: event.summary,
      // Parse the formatted dates into Date objects
      start: new Date(formattedStart), 
      end: new Date(formattedEnd),
        }
      })
      setEventsCalendar(events)
    })
      
   
  }, [])

  return (
    <div className="Calendario">

      {
       /*  EventsCalendar.map ((event) => {
          return (
            <div key={event.id}>
              <p>{event.title}</p>
              <p>{event.start.toString()}</p>
              <p>{event.end.toString()}</p>
            </div>
          )

      }) */
      }
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


export default BigAgenda