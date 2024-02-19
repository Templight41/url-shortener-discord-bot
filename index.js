import 'dotenv/config';
import express from 'express';
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from 'discord-interactions';
import { VerifyDiscordRequest, getRandomEmoji, DiscordRequest } from './utils.js';
// import { getShuffledOptions, getResult } from './game.js';

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));


/**
 * Interactions endpoint URL where Discord will send HTTP requests
 */
app.post('/shorten', async function (req, res) {
  // Interaction type and data
  const { type, id, data } = req.body;

  console.log(type, id, data)
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});