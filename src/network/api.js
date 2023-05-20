//api.js


import axios from 'axios';

export const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = response.data;
    console.log('Posts data:', data); // Вывести данные с помощью console.log
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = response.data;
    console.log('User data:', data); // Вывести данные с помощью console.log
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const fetchUserPosts = async (userId) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const data = response.data;
    console.log('User posts data:', data); // Вывести данные с помощью console.log
    return data;
  } catch (error) {
    console.error('Error fetching user posts:', error);
    throw error;
  }
};
