import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "&api-key=26c173d356d24490a332df2068d7f56f";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
