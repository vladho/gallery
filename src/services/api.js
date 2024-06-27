import axios from "axios";

// const Authorization = process.env.REACT_APP_API_KEY;
const Authorization = "Client-ID j_knc_osII1b4Vten-5gcRoQrwAYBXbrkLaadAh9fzY"

const baseUrl = "https://api.unsplash.com/photos/";

console.log(Authorization)

export const getImages = async () => {
console.log(Authorization)
  
    try {
console.log(Authorization)

      const response = await axios.post(baseUrl, {
        headers:  Authorization
    
    });
      return response;
    } catch (error) {
      console.error("Помилка", error);
      throw error;
    }
  };