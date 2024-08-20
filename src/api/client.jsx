import axios from "axios";
export default axios.create({ baseURL: "http://localhost:5050" });

const campaignsApi = axios.create({
  baseURL: "http://localhost:5050",
});

const getHeaders = () => {
  return {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
};

export const campaignsPost = (url, body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await campaignsApi.post(url, body, { ...getHeaders() });
      resolve(resp);
    } catch (error) {
      reject(error);
    }
  });
};

export const campaignsGet = (url, params = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await campaignsApi.get(url, { ...getHeaders(), params });
      resolve(resp);
    } catch (error) {
      reject(error);
    }
  });
};

export const campaignsPut = (url, body, params = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await campaignsApi.put(url, body, {
        ...getHeaders(),
        params,
      });
      resolve(resp);
    } catch (error) {
      reject(error);
    }
  });
};

export const campaignsDelete = (url, params = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await campaignsApi.delete(url, { ...getHeaders(), params });
      resolve(resp);
    } catch (error) {
      reject(error);
    }
  });
};
