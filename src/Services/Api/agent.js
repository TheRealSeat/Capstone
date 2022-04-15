import axios from "axios";

//change base url here
axios.defaults.baseURL = "https://" + process.env.REACT_APP_BASE_URL + "/api/";
//axios.defaults.withCredentials = true;
// axios.defaults.headers={
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Credentials': true,
//   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
//   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
// }
const responseBody = (response) => response.data;
//this is for testing for async method
axios.interceptors.response.use(
  async (response) => {
    
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
  details: (id) => requests.get(`events/${id}`),
  create:(values) =>requests.post("events",values),
  listType: (type) => requests.get(`events?EventType=${type}`),
};

const Transaction = {
    list: () => requests.get("UserTransactions"),
    details: (id) => requests.get(`UserTransactions/${id}`),
    create: (values) => requests.post("UserTransactions", values),
};

const PaymentIntent = {
  create: (values) => requests.post("PaymentIntent", values),
};

//Add new endpoints to this object
const agent = {
    Event,
    Transaction,
    PaymentIntent
};

export default agent;
