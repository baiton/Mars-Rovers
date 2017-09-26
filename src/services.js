import axios from 'axios';



export default function getPictures(updatedUrl){
  return axios.get(updatedUrl)
}
