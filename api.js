import { Configuration, OpenAIApi } from 'openai'

const openaiApiKey = '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'
const configuration = new Configuration({
  apiKey: openaiApiKey,
})

export const openai = new OpenAIApi(configuration)


