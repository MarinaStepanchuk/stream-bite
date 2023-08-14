interface ICustomError {
  data: {
    error: string;
    message: string;
    status: number;
  };
  status: number;
}

export { ICustomError };
