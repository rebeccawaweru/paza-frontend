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
const uploadsApi = createApiInstance("http://54.163.27.140:5000/uploads");

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

// const campaignsApi = axios.create({
//   baseURL: "http://localhost:5050",
// });

// const getHeaders = () => {
//   return {
//     headers: {
//       Authorization: `${localStorage.getItem("token")}`,
//     },
//   };
// };

// export const campaignsPost = (url, body) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const resp = await campaignsApi.post(url, body, { ...getHeaders() });
//       resolve(resp);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// export const campaignsGet = (url, params = {}) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const resp = await campaignsApi.get(url, { ...getHeaders(), params });
//       resolve(resp);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// export const campaignsPut = (url, body, params = {}) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const resp = await campaignsApi.put(url, body, {
//         ...getHeaders(),
//         params,
//       });
//       resolve(resp);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

// export const campaignsDelete = (url, params = {}) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const resp = await campaignsApi.delete(url, { ...getHeaders(), params });
//       resolve(resp);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };
