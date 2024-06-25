import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React from 'react'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './AgendaCalendario.css'
import { Box } from '@chakra-ui/react'

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer


 const BigAgenda = (props) => (
  <div  className="Calendario">
    <Calendar
      
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
    />
    
  </div>
)

export default BigAgenda