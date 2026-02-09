import { SarvamAIClient } from "sarvamai";

const client = new SarvamAIClient({
    apiSubscriptionKey: "SARVAM_API_KEY"
});

const response = await client.textToSpeech.convert({
    text: "নমস্কার! Sarvam AI-তে আপনাকে স্বাগতম।

আমরা ভারতীয় ভাষাগুলির জন্য advanced voice technology তৈরি করি। আমাদের text-to-speech models natural এবং মানুষের মতো voice produce করে, যা অত্যন্ত realistic শোনায়।

আপনি আপনার text type করতে পারেন অথবা different voices try করতে যেকোনো voice card-এ play button-এ click করতে পারেন। চলুন, আপনার ভাষায় AI-এর শক্তি experience করুন!",
    target_language_code: "bn-IN",
    speaker: "shubh",
    pace: 0.95,
    speech_sample_rate: 22050,
    enable_preprocessing: true,
    model: "bulbul:v3",
    temperature: 0.6
});

console.log(response);