import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://mocki.io/v1/ab8edf2d-0994-4ae0-a3e2-3269cb17e971',
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});