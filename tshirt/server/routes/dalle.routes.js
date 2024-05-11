import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

// const config = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(config);

const openai = new OpenAI({
    apiKey:process.env.OPEN_AI_KEY,
});


router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Hello from DALL-E! Routes'});
})

router.route('/').post(async(req, res) => {
    try {
        const { prompt} = req.body;

        const response = await openai.images.generate({
            prompt,
            model: "dall-e-2",
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = response.data.data[0].b64_json;
        console.log("Generated image:",image);

        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });  
    }
});

export default router;