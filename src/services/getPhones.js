import axios from "axios";

async function getPhones() {
  return axios({
    method: "get",
    url: "http://localhost:3000/api/phone/phones",
  }).then(res => res.data);
}

export default getPhones;