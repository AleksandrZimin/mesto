/* Главная функция валидации*/
const enableValidation = ({ formSelector, ...rest}) => {
   const forms = Array.from(document.querySelectorAll(formSelector)) // выбор всех форм
   forms.forEach(form => { 
      setEventListeners(form, rest) // для всех форм вызываем функцию ниже
   })
}

const setEventListeners = (form, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => {
   const formInputs = Array.from(form.querySelectorAll(inputSelector)) // выбор всех ингпутов внутри формы
   const formButton = form.querySelector(submitButtonSelector) // выбор кнопки в форме
   switchButtonState(formButton, formInputs, inactiveButtonClass) // отключение кнопок при загрузке страницы 
   formInputs.forEach(input => {
      input.addEventListener('input', () => {  // вешаем на импут слушатель события ввода
         console.log(form)
         console.log('123')
         checkInputValid(input, form, rest)
         switchButtonState(formButton, formInputs, inactiveButtonClass) // отключение кнопки
      })
   })
}

const checkInputValid = (input, form, rest) => {   // функция проверки валидности информации при вводе
   const errorSpan = form.querySelector(`#${input.name}-error`) // выбираем элемент с ошибкой
   if(input.validity.valid) {   // Если проверка валидации возвращает тру, то вызываем функцию скрытие ошибки, если фолс, то добавляем ошибку
      hideError(errorSpan, input, rest)
   } else {
      showError(errorSpan, input, rest)
   }
}

const hideError = (span, input, {inputErrorClass, errorClass}) => { // функция скрытия ошибки
   span.classList.remove(errorClass); // удаляем класс с ошибкой
   span.textContent = ''; // очищаем текст ошибки
   input.classList.remove(inputErrorClass) // удаляем класс с ошибкой

}

const showError = (span, input, {inputErrorClass, errorClass}) => {
   span.classList.add(errorClass); // добавляем класс с ошибкой
   span.textContent = input.validationMessage; // добавляем текст ошибки
   input.classList.add(inputErrorClass)  // добавляем класс с ошибкой
}

const switchButtonState = (formButton, formInputs, inactiveButtonClass) => { // функция для кнопки
   if(isFormValid(formInputs)) {  // если форма валидна, то кнопку разблокируем, если нет, то блокируем
      enableButton(formButton, inactiveButtonClass)
   } else {
      disableButton(formButton, inactiveButtonClass)
   }
}

const isFormValid = (inputs) => { // проверка валидности формы
   return !inputs.some(input => {
      return !input.validity.valid
   })
}

const disableButton = (formButton, inactiveButtonClass) => { // блокирование кнопки
   formButton.classList.add(inactiveButtonClass) // добавляем класс
   formButton.setAttribute('disabled',true) // добавляем атрибут
}

const enableButton = (formButton, inactiveButtonClass) => { // разблокирование кнопки
   formButton.classList.remove(inactiveButtonClass) // удаляем класс
   formButton.removeAttribute('disabled') // удаляем атрибут
}

