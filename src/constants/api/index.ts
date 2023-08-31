import 'dotenv/config';

const { APP_KEY, APP_ID, TYPE } = process.env;

export const basicParams = {
  app_key: APP_KEY,
  app_id: APP_ID,
  type: TYPE
};
