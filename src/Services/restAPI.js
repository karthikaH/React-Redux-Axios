/**
 * @fileOverview The file to handle REST api calls
 */

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:3002/api/v1', // our server url
});

const restAPIRequest = (url, verb, params = null) => {
  if (params) {
    return instance[verb](url, {
      params,
    })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
  return instance[verb](url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default restAPIRequest;
