const { Configuration, OpenAIApi } = require('openai');

const openaiApiKey = 'sua-chave-de-api-aqui'; // Substitua pela sua chave de API
const configuration = new Configuration({
  apiKey: openaiApiKey,
});

const openai = new OpenAIApi(configuration);

module.exports = {
  openai: openai
};

