import { createCustomError } from ".";

describe('createCustomError', () => {
  test('returns an Error, with the message and status properties', () => {
    const exceptionMsg = 'Cannot read property "data" of undefined';
    const statusCode = 400;

    const customError = createCustomError(exceptionMsg, statusCode);

    expect(customError.response.status).toEqual(400);
    expect(customError.message).toEqual(exceptionMsg);
    expect(customError instanceof Error).toBeTruthy();
  });
});
