import request from 'superagent'
import { Config } from './GoogleConfig.ts'

const GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/${Config.AgendaID}/events?key=${Config.apiKey}`


export function getEvents() {
    return new Promise((resolve, reject) => {
      request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
        if (err) {
          reject(err);
        } else {
          const events = JSON.parse(resp.text).items.map(event => ({
            start: new Date(event.start.dateTime.toString()),
            end: new Date(event.end.dateTime.toString()),
            title: event.summary
          }));
          resolve(events);
        }
      });
    });
  }