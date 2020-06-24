import axios from 'axios';
import haversine from './haversine';

export const apiBase = 'https://bpdts-test-app.herokuapp.com';
export const london = {
  latitude: 51.5074,
  longitude: 0.1278,
  radius: 45, // in miles
};

/* very simple in memory cache */
let usersInRadius = [];

export const getUsers = async () => {
  try {
    if(usersInRadius.length) return usersInRadius;

    const results = await axios.get(`${apiBase}/users`);
    const inRadius = results.data.filter(item => {
      const distance = haversine(item.latitude, item.longitude, london.latitude, london.longitude, 'M');
      return distance < london.radius + 50;
    });
    usersInRadius = inRadius;
    return inRadius;
  } catch(error) {
      console.log(error);
      return { error };
  };
};
