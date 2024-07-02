import axios from 'axios'; // Or your preferred HTTP client library

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://us-central1-projetor-db5a9.cloudfunctions.net/Calendar',
      {
        headers: {
          'Access-Control-Allow-Origin': '*' // Allow all origins (for testing)
        }
      }
    );
    console.log(response.data); // Access the data from the Cloud Function
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchData;