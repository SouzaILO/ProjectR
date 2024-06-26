import ApiCalendar from 'react-google-calendar-api'

export const Config = {
  clientId: '35152341949-s3avc94sake6qadd4vstblnptp9aj5pk.apps.googleusercontent.com',
  apiKey: 'AIzaSyAHpuZg3-_FdA69q_MqS2h6rH6-3Rp-_SU',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
  AgendaID : '370b8ef3c013af95d21cb9f356e8d02c342965cb9cd398c22f0afa8aac7d6e39@group.calendar.google.com'
}

const apiCalendar = new ApiCalendar(Config)

