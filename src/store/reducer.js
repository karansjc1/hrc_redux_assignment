const initialState = {
  selected1: "Left Top",
  selected2: "Left Down",
  selected3: "Right Top",
  selected4: "Right Down",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "leftTop":
      return {
        ...state,
        selected1: action.key,
      };
    case "leftDown":
      return {
        ...state,
        selected2: action.key,
        selected1: action.key,
      };
    case "rightTop":
      return {
        ...state,
        selected3: action.key,
        selected2: action.key,
        selected1: action.key,
      };
    case "rightDown":
      return {
        ...state,
        selected4: action.key,
        selected3: action.key,
        selected2: action.key,
        selected1: action.key,
      };
    case "RESET1":
      return {
        ...state,
        selected1: "Left Top",
      };
    case "RESET2":
      return {
        ...state,
        selected2: "Left Down",
      };
    case "RESET3":
      return {
        ...state,
        selected3: "Right Top",
      };
    case "RESET4":
      return {
        ...state,
        selected4: "Right Down",
      };
    default:
      return state;
  }
};

export default reducer;
