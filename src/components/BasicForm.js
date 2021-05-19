import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const {
    inputValue: name,
    inputIsValid: nameIsValid,
    hasError: nameIsInvalid,
    onChangeHandler: onNameChangeHandler,
    onBlurHandler: onNameBlurHandler,
    resetInput: resetNameHandler,
  } = useForm((name) => name.trim() !== "");

  const {
    inputValue: surname,
    inputIsValid: surnameIsValid,
    hasError: surnameIsInvalid,
    onChangeHandler: onSurnameChangeHandler,
    onBlurHandler: onSurnameBlurHandler,
    resetInput: resetSurnameHandler,
  } = useForm((surname) => surname.trim() !== "");

  const {
    inputValue: email,
    inputIsValid: emailIsValid,
    hasError: emailIsInvalid,
    onChangeHandler: onEmailChangeHandler,
    onBlurHandler: onEmailBlurHandler,
    resetInput: resetEmailHandler,
  } = useForm((email) =>
    email.match(
      // eslint-disable-next-line no-useless-escape
      /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
    )
  );

  let formIsValid = false;

  if (nameIsValid && surnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (nameIsInvalid || surnameIsInvalid || emailIsInvalid) {
      return;
    }

    resetEmailHandler();
    resetNameHandler();
    resetSurnameHandler();
  };

  const nameInputClasses = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const surnameInputClasses = surnameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={onNameChangeHandler}
            onBlur={onNameBlurHandler}
            value={name}
          />
          {nameIsInvalid && <p>Enter a valid name.</p>}
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor="surname">Last Name</label>
          <input
            type="text"
            id="surname"
            onChange={onSurnameChangeHandler}
            onBlur={onSurnameBlurHandler}
            value={surname}
          />
          {surnameIsInvalid && <p>Enter a valid surname.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={onEmailChangeHandler}
          onBlur={onEmailBlurHandler}
          value={email}
        />
        {emailIsInvalid && <p>Enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
