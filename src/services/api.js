import axios from "axios";

// const Authorization = process.env.REACT_APP_API_KEY;
const token ="Client-ID j_knc_osII1b4Vten-5gcRoQrwAYBXbrkLaadAh9fzY"
const Authorization = "j_knc_osII1b4Vten-5gcRoQrwAYBXbrkLaadAh9fzY"

// const setToken = token =>
//     (axios.defaults.headers.common.Authorization = `Authorization ${token}`);

const baseUrl = "https://api.unsplash.com/photos/";


export const getImages = async () => {
// console.log(Authorization)
  
    try {
// console.log(Authorization)

      const response = await axios.get('https://api.unsplash.com/photos/',
        {headers: {
            Authorization: `Client-ID ${Authorization}`
          }
    
    });
    console.log(response)

      return response.data;
    } catch (error) {
      console.error("Помилка", error);
      throw error;
    }
  };