const { Configuration, OpenAIApi } = require('openai');

const openaiApiKey = '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'; // Substitua pela sua chave de API
const configuration = new Configuration({
  apiKey: openaiApiKey,
});

const openai = new OpenAIApi(configuration);

module.exports = {
  openai: openai
};

