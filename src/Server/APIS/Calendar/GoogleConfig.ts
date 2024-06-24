import ApiCalendar from 'react-google-calendar-api'

const config = {
  clientId: '35152341949-s3avc94sake6qadd4vstblnptp9aj5pk.apps.googleusercontent.com',
  apiKey: 'AIzaSyAHpuZg3-_FdA69q_MqS2h6rH6-3Rp-_SU',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
}

const apiCalendar = new ApiCalendar(config)