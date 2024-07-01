import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const authorization = "j_knc_osII1b4Vten-5gcRoQrwAYBXbrkLaadAh9fzY"
const baseUrl = "https://api.unsplash.com/photos/";
const topicsUrl = 'https://api.unsplash.com/topics';
const searchUrl = 'https://api.unsplash.com/search/photos' ;



export const getImages = async ( orderBy, page = 1 ) => {
  const baseAuthorization = {
    headers: {
      Authorization: `Client-ID ${authorization}`
    },
    params: {
      page: page,
      per_page: 9,
      order_by: orderBy,
    }
  };
  
  try {
    const response = await axios.get(baseUrl, baseAuthorization);
    console.log(response.data);
    const totalPages = parseInt(response.headers['x-total']) || 1;
    
    return {
      images: response.data,
      totalPages: Math.ceil(totalPages / 9)
    };

  } catch (error) {
    console.error("Помилка", error);
    throw error;
  }
};

export const getTopics = async () => {

  try {
    const response = await axios.get(topicsUrl, {
      headers: {
        Authorization: `Client-ID ${authorization}`,
      },
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Помилка", error);
    throw error;
  }
};

export const getTopicsPhotos =  async (orderBy, slug,page) => { 

  try {  
    const response = await axios.get(`https://api.unsplash.com/topics/${slug}/photos`, {
      headers: {
        Authorization: `Client-ID ${authorization}`,
      },params: {
        page:page,
        per_page: 9,
        order_by: orderBy,}
    });

    const totalPages = parseInt(response.headers['x-total']) || 1;
    
    return {
      images: response.data,
      totalPages: Math.ceil(totalPages / 9)
    };
  } catch (error) {
    console.error("Помилка", error);
    throw error;
  }
};

export const getSearchPhotos =  async (value,page) => { 
  try {  
    const response = await axios.get(searchUrl, {
      headers: {
        Authorization: `Client-ID ${authorization}`,
      },params: {
        query:value,
        page:page,
        per_page: 9,
        }
    });
    const totalPages = parseInt(response.headers['x-total']) || 1;

    return {
      images: response.data.results,
      totalPages: Math.ceil(totalPages / 9)
    };
  } catch (error) {
    console.error("Помилка", error);
    throw error;
  }
};





