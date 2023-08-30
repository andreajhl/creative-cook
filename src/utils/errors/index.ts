export const createCustomError = (message: string, statudCode: number) => {
  const error: any = new Error();
  error.message = message;
  error.response = { status: statudCode };

  return error;
};
