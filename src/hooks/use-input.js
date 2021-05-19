import { useState } from "react";

// we expect that this parameter recieves a functions as a value
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState("");

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError, // or just hasError
    // now these functions are exposed
    // they can be called from the place where the hook
    // is being used
    valueChangeHandler,
    inputBlurHandler,
    reset: reset,
  };
};

export default useInput;
