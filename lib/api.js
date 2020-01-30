// export const getUser = async userId => {
//   console.log(userId);
// };
import axios from 'axios';


export const createCompany = async (authUserId, company) => {
console.log('company',company);
  const {data} = await axios.put(`/api/company/create`, company);
  return data;

}

export const getCompanyList = async () => {

  const {data} = await axios.get(`/api/company/`);
  console.log(data)
  return data;

}
