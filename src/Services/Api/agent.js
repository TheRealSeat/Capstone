import axios from "axios";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));
//change base url here
axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.withCredentials = true;
const responseBody = (response) => response.data;

//this is for testing for async method
axios.interceptors.response.use(
  async (response) => {
    await sleep();
    return response;
  },
  (error) => {
    
    return Promise.reject(error.response);
  }
);

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

//We can use this as central data fetching
const Event = {
  list: () => requests.get("events"),
  details: (id) => requests.get(`event/${id}`),
  listType: (type) => requests.get(`events?type=${type}`),
};

//Add new endpoints to this object
const agent = {
    Event
};

export default agent;
