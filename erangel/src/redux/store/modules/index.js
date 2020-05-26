import { combineReducers } from "redux";
import ErrMessage from "./ErrMessage";
// Reducers 합치기
export default combineReducers({
  ErrMessage,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
