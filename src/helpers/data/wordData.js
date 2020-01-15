import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';

const testWord = 'globe';

const key = apiKeys.collegeKey;

const testGetWord = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/${testWord}/?key=${key}`)
    .then((response) => {
      const baseWord = response.data[0].hwi.hw;
      resolve(baseWord);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { testGetWord };
