/* eslint-disable*/

/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


require("dotenv").config();
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
// this funtion will be triggered by a http request and will return all the events in google calendar with no time or date limit

import {google} from 'googleapis'
import { getAuth } from 'firebase/auth'

 export  function authenticate () {

  return google.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.readonly"})
      .then(function() { console.log("Sign-in successful"); },
            function(err: any) { console.error("Error signing in", err); });
}

export function loadClient () {
  google.client.setApiKey(getAuth().config.apiKey);
  return google.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err: any) { console.error("Error loading GAPI client for API", err); });
}

export function  execute () {
  return google.client.calendar.events.list({
    "calendarId": "370b8ef3c013af95d21cb9f356e8d02c342965cb9cd398c22f0afa8aac7d6e39@group.calendar.google.com",
    "maxResults": 200
  })
      .then(function(response: any) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            function(err: any) { console.error("Execute error", err); });

}

