import axios from 'axios';

const url = 'https://w-data.netlify.app/.netlify/functions/app';

const apiMaster = {
  getForecast: (city) => {
    return axios.get(`${url}/forecast`, { params: { city: city }});
  },
  getWeather: (city) => {
    return axios.get(`${url}/weather`, { params: { city: city }});
  },
}

export default apiMaster;