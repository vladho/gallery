import axios from "axios";

const Authorization = "j_knc_osII1b4Vten-5gcRoQrwAYBXbrkLaadAh9fzY"
const baseUrl = "https://api.unsplash.com/photos/";
const topicsUrl = 'https://api.unsplash.com/topics';



export const getImages = async ({orderBy}) => {
  const baseAuthorization = {
    headers: {
    Authorization: `Client-ID ${Authorization}`
  }, params: {
    per_page: 9,
    order_by: orderBy,
  }}
  
    try {
      const response = await axios.get(baseUrl,baseAuthorization);
    console.log(response.data)

      return response.data;

    } catch (error) {
      console.error("Помилка", error);
      throw error;
    }
  };

export const getTopics = async () => {

  try {
    const response = await axios.get(topicsUrl, {
      headers: {
        Authorization: `Client-ID ${Authorization}`,
      },
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Помилка", error);
    throw error;
  }
};

export const getTopicsPhotos =  async (orderBy, slug) => { 
  try {  
    const response = await axios.get(`https://api.unsplash.com/topics/${slug}/photos`, {
      headers: {
        Authorization: `Client-ID ${Authorization}`,
      },params: {
        per_page: 9,
        order_by: orderBy,}
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Помилка", error);
    throw error;
  }
};



