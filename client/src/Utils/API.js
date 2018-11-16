import axios from "axios";
// NYTimes API
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// let query = "Eryk Salvaggio";
// let beginYear = "1900";
// let endYear = "2018";

const myQuery = ({ query, beginYear, endYear }) => ({
  "api-key": "26c173d356d24490a332df2068d7f56f",
  q: query,
  begin_date: beginYear + "0101",
  end_date: endYear + "1231",
  page: 0
});

export default {
  searchApi: function({ query, beginYear, endYear }) {
    return axios.get(BASEURL, {
      params: myQuery({ query, beginYear, endYear })
    });
  }
};
