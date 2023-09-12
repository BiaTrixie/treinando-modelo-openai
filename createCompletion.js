const { openai } = require('./api.js');

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'seu-modelo-aqui',
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
