import axios from 'axios'; // Or your preferred HTTP client library

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://us-central1-projetor-db5a9.cloudfunctions.net/Calendar'
    ); // No need to set headers here
    console.log(response.data.data); // Access the data from the Cloud Function
    return response.data.data.items;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchData;