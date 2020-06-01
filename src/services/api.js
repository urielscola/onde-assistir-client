import instance, { defaultHeaders } from './instance';

const url = process.env.API_URL;

const API = {
  search: async (params, headers) => {
    const data = await instance({
      url: `${url}/item/search`,
      method: 'GET',
      params,
      headers: { ...defaultHeaders(), ...headers },
    });

    return data;
  },

  recommended: async id => {
    const data = await instance({
      url: `${url}/item/${id}/recommended`,
      method: 'GET',
      headers: { ...defaultHeaders() },
    });

    return data;
  },

  contact: async payload => {
    const data = await instance({
      url: `${url}/contact`,
      method: 'POST',
      data: payload,
      headers: { ...defaultHeaders() },
    });

    return data;
  }
};

export default API;
