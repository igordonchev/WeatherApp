// utils/forecastUtils.js
const apiKey = 'd5ffaf58a30ebe18ca5f64b1e284543a'; // Replace with your actual API key

export const getOneDayForecast = async (location) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1`
    );

    if (!response.ok) {
      throw new Error(`One Day Forecast request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log('One Day Forecast Data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching one-day forecast:', error);
    throw error;
  }
};

export const getFiveDayForecast = async (location) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5`
    );

    if (!response.ok) {
      throw new Error(`Five Day Forecast request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Five Day Forecast Data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching five-day forecast:', error);
    throw error;
  }
};
