import axios from 'axios';
import apiKeys from '../apiKeys.json';

const key = apiKeys.wordKey;

const testCall2 = () => new Promise((resolve, reject) => {
  axios({
    url: 'https://wordsapiv1.p.rapidapi.com/words/?random=true',
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': `${key}`,
    },
  })
    .then((response) => {
      const baseWord = response.data.word;
      resolve(baseWord);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { testCall2 };
