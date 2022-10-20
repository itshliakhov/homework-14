function PasswordValidation({
  input,
  checkBigLetter,
  checkSymbols,
  checkNumber,
  checkLength,
}) {
  const passwordInput = document.querySelector(input);
  const checkValidLetter = document.querySelector(checkBigLetter);
  const checkValidNumber = document.querySelector(checkNumber);
  const chekValidSymbols = document.querySelector(checkSymbols);
  const checkValidLength = document.querySelector(checkLength);

  this.startValidation = function () {
    if (passwordInput.value === "") {
      const _li = document.querySelectorAll("li");
      _li.forEach((el) => {
        el.style.color = "red";
      });
    }
    passwordInput.addEventListener("input", () => {
      this.value = passwordInput.value;
      const regEx =
        /^(?=.*\d)(?=.*[A-Z])(?=.*[!?;:()"-.])[\da-zA-Z!?;:()"-.]{8}$/;
      let allValidationResult = this.value.match(regEx);
      this.allVerification();
    });
  };
  this.allVerification = function () {
    this.checkBigLetterValidation();
    this.checkNumberValidation();
    this.checkSymbolValidation();
    this.checkPasswordLengthValidation();
  };
  this.checkBigLetterValidation = () => {
    const regBigLetter = /(?=.*[A-Z])/;
    let letterValidResult = this.value.match(regBigLetter);
    if (letterValidResult) {
      checkValidLetter.style.color = "green";
    } else {
      checkValidLetter.style.color = "red";
    }
  };

  this.checkNumberValidation = () => {
    const regDigit = /(?=.*\d)/;
    let numberValidResult = this.value.match(regDigit);
    if (numberValidResult) {
      checkValidNumber.style.color = "green";
    } else {
      checkValidNumber.style.color = "red";
    }
  };

  this.checkSymbolValidation = () => {
    const regSymbol = /(?=.*[!?;:()"-.])/;
    let symbolValidResult = this.value.match(regSymbol);
    if (symbolValidResult) {
      chekValidSymbols.style.color = "green";
    } else {
      chekValidSymbols.style.color = "red";
    }
  };
  this.checkPasswordLengthValidation = () => {
    const regAmount = /.{8}/;
    let lengthValidResult = this.value.match(regAmount);
    if (lengthValidResult) {
      checkValidLength.style.color = "green";
    } else {
      checkValidLength.style.color = "red";
    }
  };
}

const passwordValidation = new PasswordValidation({
  input: ".js--input",
  checkBigLetter: ".js--check_letter",
  checkSymbols: ".js--check_symbol",
  checkNumber: ".js--check_number",
  checkLength: ".js--check_length",
});
passwordValidation.startValidation();
