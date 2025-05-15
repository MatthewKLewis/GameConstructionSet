import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const npcRoutes = require('./routes/npcRoutes');
const raceRoutes = require('./routes/raceRoutes');
const religionRoutes = require('./routes/religionRoutes');

app.use('/npc', npcRoutes);
app.use('/race', raceRoutes);
app.use('/religion', religionRoutes);

app.listen(4201, '127.0.0.1', () => {
  console.log('Listening on 4201');
});
