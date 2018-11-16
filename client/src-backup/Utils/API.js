import axios from "axios";
// NYTimes API
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

let query = "";
let beginYear = "";
let endYear = "";

const myQuery = {
  "api-key": "26c173d356d24490a332df2068d7f56f",
  q: query,
  begin_date: beginYear + "0101",
  end_date: endYear + "1231",
  page: 0
};

export default {
  searchApi: function(myQuery) {
    return axios.get(BASEURL + myQuery);
  }
};
