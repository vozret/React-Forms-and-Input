import { useReducer } from "react";

const initialInputState = { value: "", isTouched: false };

const inputStateReducer = (prevState, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: prevState.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: prevState.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return {
    inputStateReducer,
  };
};

const useForm = (validateInput) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const inputIsValid = validateInput(inputState.value);
  const hasError = !inputIsValid && inputState.isTouched;

  const inputIsTouchedHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const resetInput = () => {
    dispatch({ type: "RESET" });
  };

  return {
    inputValue: inputState.value,
    inputIsValid,
    hasError,
    onChangeHandler: inputChangeHandler,
    onBlurHandler: inputIsTouchedHandler,
    resetInput,
  };
};

export default useForm;
