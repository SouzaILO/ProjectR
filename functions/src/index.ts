/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import {google} from "googleapis";
require("dotenv").config();
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
// this funtion will be triggered by a http request and will return all the events in google calendar with no time or date limit


const outh2Client = new google.auth.OAuth2(
  process.env.REACT_APP_CLIENT_ID,
  process.env.REACT_APP_SECRET_ID,
  process.env.REACT_APP_CALENDAR_ID
);

export const getEvents = onRequest((request, response) => {
  const calendar = google.calendar({version: "v3", auth: outh2Client});

  calendar.events.list({
    calendarId: "370b8ef3c013af95d21cb9f356e8d02c342965cb9cd398c22f0afa8aac7d6e39@group.calendar.google.com",
    singleEvents: true,
    orderBy: "startTime",
  }, (err, res) => {
    if (err) return console.log("The API returned an error: " + err);
    const events = res?.data?.items;
    response.send(events);
  });
  response.send("empty");
});
