const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');
const configuration = new Configuration({
    apiKey: `${process.env.ChatGPTAPIKey}`
});
const openai = new OpenAIApi(configuration);

async function askQuestions(question){

    try {
        const res = await openai.createCompletion({
            model: 'text-davinci-003',
            max_tokens: 2048,
            temperature: 0.5,
            prompt: `${question}`
        })        
        const reply = res.data.choices[0].text

        return reply
    } catch (error) {
        console.log(error);
        return 'failed'
    }

}

module.exports = {
    askQuestions, askQuestions
}