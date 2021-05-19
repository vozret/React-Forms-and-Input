import { useState } from "react";

const useForm = (validateInput) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInput(inputValue);
  const hasError = !inputIsValid && isTouched;

  const inputIsTouchedHandler = (event) => {
    setIsTouched(true);
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const resetInput = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    inputValue,
    inputIsValid,
    hasError,
    onChangeHandler: inputChangeHandler,
    onBlurHandler: inputIsTouchedHandler,
    resetInput,
  };
};

export default useForm;
