import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const authedID = "sarahedo";
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
      dispatch(setAuthedUser(authedID));
      dispatch(hideLoading());
    });
  };
}
