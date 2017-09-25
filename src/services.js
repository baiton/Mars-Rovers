import axios from 'axios';



export default function apiFetch(){
  return axios.get('https://api.nasa.gov/planetary/apod?api_key=yuDqDvCMpuimoGO7hQ72R6QR8gfQkdNwj5cuWWk0')
}
