import axios from "axios";
import { User } from "../@types/common";
import constants from "../util/constants";

// I want to use axios

export async function fetchUsers(): Promise<User[]> {
  const response = await axios.get(`${constants.URL}/employees`); 
  return response.data;
}
// export const  fetchUsers = async() =>  {
//   const response = await axios.get<User[]>('/api/users'); 
//   return response.data;

// }

export async function createUser(userData: User): Promise<User> {
  const response = await axios.post('/api/users', userData); 
  return response.data;
}