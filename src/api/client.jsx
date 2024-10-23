import axios from "axios";
export default axios.create({ baseURL: "http://localhost:5050" });

const createApiInstance = (baseURL) => {
  return axios.create({
    baseURL,
  });
};

const getHeaders = (customHeaders = {}) => {
  return {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
      ...customHeaders,
    },
  };
};

const requestHandler = async (
  apiInstance,
  method,
  url,
  body = null,
  params = {},
  customHeaders = {}
) => {
  try {
    const options = {
      ...getHeaders(customHeaders),
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
const uploadsApi = createApiInstance("http://localhost:5000/uploads");
const jobsApi = createApiInstance("http://localhost:5050/jobs");

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

//Exported API methods for uploads
export const attachmentsPost = (url, formData) =>
  requestHandler(
    uploadsApi,
    "post",
    url,
    formData,
    {},
    { "Content-Type": "multipart/form-data" }
  );
export const avatarPost = (url, formData) =>
  requestHandler(
    uploadsApi,
    "post",
    url,
    formData,
    {},
    { "Content-Type": "multipart/form-data" }
  );

//Exported API methods for jobs
export const jobsPost = (url, body) =>
  requestHandler(jobsApi, "post", url, body);

export const jobsGet = (url, params) =>
  requestHandler(jobsApi, "get", url, null, params);

export const jobsPut = (url, body, params) =>
  requestHandler(jobsApi, "put", url, body, params);

export const jobsDelete = (url, params) =>
  requestHandler(jobsApi, "delete", url, null, params);
