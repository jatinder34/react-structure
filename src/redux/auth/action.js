import { checkResponse } from "../../config/constant";
import { doLoginQuery } from "../../database/auth";

export const doLogin = payload => async dispatch => {
  dispatch({ type: "ACTION_START" });
  const apiResponse = await doLoginQuery(payload);
  const response = await checkResponse(apiResponse);
  if (response.success) {
    dispatch({
      type: "LOGGEDIN",
      payload: response.data
    });
  } else {
    dispatch({
      type: "ERROR",
      payload: response.error
    });
  }
  dispatch({ type: "COMPLETE_ACTION" });
};
