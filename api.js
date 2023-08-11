import { Configuration, OpenAIApi } from 'openai';

// Obtém a chave de API da variável de ambiente
const openaiApiKey = process.env.OPENAI_KEY;

// Configuração da instância da biblioteca openai
const configuration = new Configuration({
  apiKey: openaiApiKey
});

// Cria a instância da API OpenAI com a configuração fornecida
export const openai = new OpenAIApi(configuration);
