import express from 'express'
import * as dotenv from 'dotenv'
import OpenAI from 'openai';

// org-tQdXyoJnrTUt6CTspV3gcvD4



dotenv.config()

const router = express.Router()



const openai = new OpenAI({
    organization: "Find it in your account ",
    apiKey:process.env.OPENAI_API_KEY,
})

router.route('/').get((req,res)=>{
    res.status(200).json({message:"Hello from DLL.E ROUTES"})
})

router.route('/').post(async(req,res)=>{
    try{
        const {prompt} = req.body

        const response = await openai.createImage({
            prompt,
            n:1,
            size:'1024x1024',
            response_format:'b64_json'
        })


        const image = response.data.data[0].b64_json
        console.log("Generated image:", image);

        res.status(200).json({photo:image})

    }catch(error){
        console.error();
        res.status(500).json({message:"Something went wrong "})
    }
})
export default router