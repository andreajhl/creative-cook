import { objectIsEmpty } from "../objects";


export const toQueryParams = (obj: Record<string, unknown>): string => {
  const queryParams = !objectIsEmpty(obj)
    && Object.keys(obj)
      .map(key => `${key}=${String(obj[key])}`)
      .join('&');

  return queryParams ? `?${queryParams}` : '';
};
