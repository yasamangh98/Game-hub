import axios from "axios";
//creates an Axios instance with a pre-configured base URL and query parameters. This is useful if you are making multiple API requests to the same base URL with some common query parameters.
export default axios.create({

  baseURL: "https://api.rawg.io/api",
  //The params property specifies query parameters that are added to every request made with this Axios instance. In this case, the query parameter key is included in all requests
  params: {
    key: "db4ed73662ed4739af31085412a96fbf",
  },
});