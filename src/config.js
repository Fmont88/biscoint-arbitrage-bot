import fs from 'fs';
import _ from 'lodash';


const config = {
  apiKey: 'fc4ba69e8259482782a8263283287e9a41fce0abdf6d81c64caf6845163cba05',
  apiSecret: '527658d20de29cb4d388a9816c4622f92bbed87736d6a0ec40d9a962a12aceb9',
  amount: 1000,
  amountCurrency: 'BRL',
  initialBuy: true,
  minProfitPercent: 0.01,
  // specify null to let the bot calculate the minimum allowed interval
  intervalSeconds: null,
  playSound: false,
  simulation: false,
  executeMissedSecondLeg: true,
};

try {
  _.merge(config, JSON.parse(fs.readFileSync(
    `./config.json`,
  )));
} catch (err) {
  console.log('[INFO] Could not read config.json file.', err);
}

export default config;
