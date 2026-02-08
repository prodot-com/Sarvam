import "dotenv/config";
import { SarvamAIClient } from "sarvamai";
import fs from "fs";

const client = new SarvamAIClient({
  apiSubscriptionKey: process.env.SARVAM_API_KEY,
});

const response = await client.textToSpeech.convert({
  text: "Hello, ami hochi probal?",
  model: "bulbul:v3",
  speaker:"ishita",
  target_language_code: "bn-IN"
});

const buffer = Buffer.from(response.audios[0], "base64");
fs.writeFileSync("output.wav", buffer);
