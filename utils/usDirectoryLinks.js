const env = 'development';//process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const systemApiBaseUrl = {
	"api":{
		"baseUrl": "https://www.admin.findingpages.com",
	}
};

export default systemApiBaseUrl;
