const { openai } = require('./api.js');

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-personal-2023-08-22-16-44-22',
      prompt: 'Perguntas sobre imobiliária e imóveis',
      max_tokens: 200
    });
    if (response.data) {
      console.log('choices: ', response.data.choices);
    }
  } catch (err) {
    console.log('err: ', err);
  }
}

createCompletion();
