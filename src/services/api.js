import OrderBy from "@/components/header/OrderBy";
import axios from "axios";

// const Authorization = process.env.REACT_APP_API_KEY;
const token ="Client-ID j_knc_osII1b4Vten-5gcRoQrwAYBXbrkLaadAh9fzY"
const Authorization = "j_knc_osII1b4Vten-5gcRoQrwAYBXbrkLaadAh9fzY"

// const setToken = token =>
//     (axios.defaults.headers.common.Authorization = `Authorization ${token}`);

const baseUrl = "https://api.unsplash.com/photos/";
// const baseAuthorization = {
//     headers: {
//     Authorization: `Client-ID ${Authorization}`
//   }, params: {
//     per_page: 8,
//     order_by: 'popular',
//   }}


export const getImages = async ({orderBy}) => {
  const baseAuthorization = {
    headers: {
    Authorization: `Client-ID ${Authorization}`
  }, params: {
    per_page: 9,
    order_by: orderBy,
  }}
  
    try {
      const response = await axios.get(baseUrl,
        baseAuthorization
        // , {params: {
        //   per_page: 8,
        //   order_by: 'popular',
        // }}
      );
    console.log(response.data)

      return response.data;

    } catch (error) {
      console.error("Помилка", error);
      throw error;
    }
  };