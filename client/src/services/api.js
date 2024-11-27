import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const fetchUserById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createUser = async (data) => {
  const response = await axios.post(API_BASE_URL, data);
  return response.data;
};

export const updateUser = async (id, data) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, data);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
