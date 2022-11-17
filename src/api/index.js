import axios from 'axios'

 // old api 9f8dc9bd0cmshd7a8d3b1e5d4bd6p1bef81jsnf5ddcaa720dc
 // new api 5eca3d4f64msh824e5a088cd5e3fp1cd926jsn3706e822de31
 
export const getPlacesData = async (type, sw, ne) => {
    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
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