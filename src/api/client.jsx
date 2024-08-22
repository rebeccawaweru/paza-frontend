import axios from "axios";
export default axios.create({ baseURL: "http://localhost:5050" });

const createApiInstance = (baseURL) => {
  return axios.create({
    baseURL,
  });
};

const getHeaders = () => {
  return {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
};

const requestHandler = async (
  apiInstance,
  method,
  url,
  body = null,
  params = {}
) => {
  try {
    const options = {
      ...getHeaders(),
      params,
    };

    let resp;
    if (method === "post" || method === "put") {
      resp = await apiInstance[method](url, body, options);
    } else {
      resp = await apiInstance[method](url, options);
    }

    return resp;
  } catch (error) {
    throw error;
  }
};

//Create API instances
const usersAuthApi = createApiInstance("http://localhost:5050/auth");
const campaignsApi = createApiInstance("http://localhost:5050/campaigns");

//Exported API methods for authentication
export const usersSignupPost = (url, body) =>
  requestHandler(usersAuthApi, "post", url, body);

export const usersLoginPost = (url, body) =>
  requestHandler(usersAuthApi, "post", url, body);

export const usersForgotPasswordPost = (url, body) =>
  requestHandler(usersAuthApi, "post", url, body);

export const usersResetPasswordPost = (url, body) =>
  requestHandler(usersAuthApi, "post", url, body);

//Exported API methods for campaigns
export const campaignsPost = (url, body) =>
  requestHandler(campaignsApi, "post", url, body);

export const campaignsGet = (url, params) =>
  requestHandler(campaignsApi, "get", url, null, params);

export const campaignsPut = (url, body, params) =>
  requestHandler(campaignsApi, "put", url, body, params);

export const campaignsDelete = (url, params) =>
  requestHandler(campaignsApi, "delete", url, null, params);
