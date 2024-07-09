export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  role: number;
  photo: string;
  address: Address;
  created_at: string;
}

export interface Address {
  street: string;
  city: string;
  country: string;
  zipcode: string;
}


export interface TableData {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  role: number;
  photo: string;
  address: Address;
  created_at: string;
}
