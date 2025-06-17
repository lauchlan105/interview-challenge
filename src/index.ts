import { getParsedData } from './lib/getParsedData';
import { Intervals } from './lib/intervals';

import "dotenv/config";

const main = async () => {
  const data = await getParsedData();
  const total = Intervals.sumIntervalData(data);
  return total;
};

main().catch((error) => console.error("An error occurred:", error));
