const isSuccess = (statusCode) => statusCode < 400;

const createMutateResponse = (statusCode, message, data) => {
  return {
    code: statusCode,
    success: isSuccess(statusCode),
    message,
    ...data,
  };
};

export default createMutateResponse;
