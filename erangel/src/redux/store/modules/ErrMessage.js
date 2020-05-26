const IDERROR = "ErrMessage/IDERROR";
const PWERROR = "ErrMessage/PWERROR";

export const iderror = () => ({ type: IDERROR });
export const pwerror = () => ({ type: PWERROR });

// 초기상태 정의
const initialState = {
  message: "",
};

// 리듀서를 만들어서 내보내줍니다.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case IDERROR:
      return {
        message: "아이디를 다시 입력하세요",
      };
    case PWERROR:
      return {
        message: "비밀번호를 다시 입력하세요",
      };
    default:
      return state;
  }
}
