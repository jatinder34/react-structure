export const Constants = {
  apiBaseUrl: "https://reqres.in/api"
};
export const checkResponse = response => {
  let newResponse = {
    success: false
  };
  if (response.status === 200) {
    newResponse = {
      success: true,
      data: response.data ? response.data : "",
      message: ''
    };
  } else {
    newResponse = {
      success: false,
      error: response.data.error
    };
  }
  return newResponse;
};
