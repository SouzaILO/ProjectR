import request from 'superagent'
import { Config } from './GoogleConfig.ts'


const GOOGLE_CALENDAR_URL = 
'https://www.googleapis.com/calendar/v3/calendars/370b8ef3c013af95d21cb9f356e8d02c342965cb9cd398c22f0afa8aac7d6e39@group.calendar.google.com/events/key=35152341949-inb6tp2tdcnbp7u6hokm1s5vr0afp5i5.apps.googleusercontent.com'


export function getEvents() {
    return new Promise((resolve, reject) => {
      request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
        if (err) {
          reject(err)
        } else {
          const events = JSON.parse(resp.text).items.map(event => ({
            start: new Date(event.start.dateTime.toString()),
            end: new Date(event.end.dateTime.toString()),
            title: event.summary
          }))
          resolve(events)
        }
      })
    })
  }