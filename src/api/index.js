import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  method: 'GET',
  url: URL,
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '9f8dc9bd0cmshd7a8d3b1e5d4bd6p1bef81jsnf5ddcaa720dc',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};
 // old api 9f8dc9bd0cmshd7a8d3b1e5d4bd6p1bef81jsnf5ddcaa720dc
 // new api 5eca3d4f64msh824e5a088cd5e3fp1cd926jsn3706e822de31
 
export const getPlacesData = async (sw, ne) => {
    try{
        const {data: {data}} = await axios.get(URL, {
            method: 'GET',
            url: URL,
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '5eca3d4f64msh824e5a088cd5e3fp1cd926jsn3706e822de31',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          })
        return data
    }catch(e){
        console.log(e)
    }
}