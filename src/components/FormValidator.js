export default class FormValidator {
  constructor(validationConfig, form) {
    this._validationConfig = validationConfig;
    this._form = form;
    this._formInputs = Array.from(
      this._form.querySelectorAll(this._validationConfig.inputSelector)
    );
    this._formButton = this._form.querySelector(
      this._validationConfig.submitButtonSelector
    );
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._switchButtonState(); // отключение кнопок при загрузке страницы
    this._formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        // вешаем на импут слушатель события ввода
        this._checkInputValid(input);
        this._switchButtonState(); // отключение кнопки
      });
    });
  }

  _switchButtonState() {
    // функция для кнопки
    if (this._isFormValid()) {
      // если форма валидна, то кнопку разблокируем, если нет, то блокируем
      this._enableButton();
    } else {
      this.disableButton();
    }
  }

  _isFormValid() {
    // проверка валидности формы
    return !this._formInputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _enableButton() {
    // разблокирование кнопки
    this._formButton.classList.remove(
      this._validationConfig.inactiveButtonClass
    ); // удаляем класс
    this._formButton.removeAttribute("disabled"); // удаляем атрибут
  }

  disableButton() {
    // разблокирование кнопки
    this._formButton.classList.add(this._validationConfig.inactiveButtonClass); // добавляем класс
    this._formButton.setAttribute("disabled", true); // добавляем атрибут
  }

  _checkInputValid = (input) => {
    // функция проверки валидности информации при вводе
    const errorSpan = this._form.querySelector(`#${input.name}-error`); // выбираем элемент с ошибкой
    if (input.validity.valid) {
      // Если проверка валидации возвращает тру, то вызываем функцию скрытие ошибки, если фолс, то добавляем ошибку
      this._hideError(errorSpan, input);
    } else {
      this._showError(errorSpan, input);
    }
  };

  _hideError(errorSpan, input) {
    // функция скрытия ошибки
    errorSpan.classList.remove(this._validationConfig.errorClass); // удаляем класс с ошибкой
    errorSpan.textContent = ""; // очищаем текст ошибки
    input.classList.remove(this._validationConfig.inputErrorClass); // удаляем класс с ошибкой
  }

  _showError(errorSpan, input) {
    errorSpan.classList.add(this._validationConfig.errorClass); // добавляем класс с ошибкой
    errorSpan.textContent = input.validationMessage; // добавляем текст ошибки
    input.classList.add(this._validationConfig.inputErrorClass); // добавляем класс с ошибкой
  }

  resetForm() {
    this._formInputs.forEach((input) => {
      this._checkInputValid(input);
    });
  }
}
