import axios from "axios";
export const jsonplaceholder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    method : 'get',
  });

  // Add a request interceptor
jsonplaceholder.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('request inceptors');
    console.log(config)
    return config;

  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
jsonplaceholder.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('responce inceptors');
    console.log(response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
