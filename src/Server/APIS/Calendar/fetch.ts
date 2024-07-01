// Import necessary modules
const { google } = require('googleapis');
const { getAuth } = require('firebase/auth');

// Initialize your Firebase app (if not already done)
// const auth = getAuth();

// Authenticate (server-side)
async function authenticate() {
  try {
    const authInstance = await google.auth.getClient({
      scopes: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events',
        'https://www.googleapis.com/auth/calendar.events.readonly',
      ],
    });
    console.log('Sign-in successful');
    return authInstance;
  } catch (err) {
    console.error('Error signing in', err);
    throw err;
  }
}

// Load Google Calendar API client (server-side)
async function loadClient() {
  try {
    const authInstance = await authenticate();
    google.options({ auth: authInstance });
    const calendar = google.calendar('v3');
    console.log('GAPI client loaded for API');
    return calendar;
  } catch (err) {
    console.error('Error loading GAPI client for API', err);
    throw err;
  }
}

// Execute Google Calendar API call (server-side)
async function execute() {
  try {
    const calendar = await loadClient();
    const response = await calendar.events.list({
      calendarId: process.env.CALENDAR_ID,
    });
    console.log('Response', response.data.items);
    return response.data.items;
  } catch (err) {
    console.error('Execute error', err);
    throw err;
  }
}