import 'dotenv/config';

const { APP_KEY, APP_ID, TYPE } = process.env;

export const LIMIT_ITEMS = 4;
export const VISIBLE_PAGES = 4;
export const basicParams = {
  app_key: APP_KEY,
  app_id: APP_ID,
  type: TYPE
};
