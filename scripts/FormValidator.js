export default class FormValidator { 
   constructor(validationConfig, openForm) {
      const validationConfig = {
         formSelector: '.form',
         inputSelector: '.form__input',
         submitButtonSelector: '.form__button',
         inactiveButtonClass: 'form__button_disabled',
         inputErrorClass: 'form__input_error',
         errorClass: 'popup-error_visible'
       }

       this._form = openForm;
       this._formInputs = Array.from(this._form.querySelectorAll(validationConfig.inputSelector));
       this._formButton = this._form.querySelector(validationConfig.submitButtonSelector);
   }

   





}