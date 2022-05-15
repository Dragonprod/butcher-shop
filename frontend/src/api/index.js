import axios from 'axios';

export default axios.create({
  baseURL: process.env.PRODUCTION_API_URL || 'http://localhost:8080/api/',
  headers: {
      Authorization: 'Bearer ' + localStorage.getItem("api_token")
  }
});