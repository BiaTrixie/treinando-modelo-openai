const { openai } = require('./api.js');
const fs = require('fs'); // Remova a desestruturação de fs

async function upload() {
  try {
    const response = await openai.createFile(
      fs.createReadStream('./perguntas_prepared.jsonl'),
      "fine-tune"
    );
    console.log('File ID: ', response.data.id)
  } catch (err) {
    console.log('err: ', err)
  }
}

upload();



