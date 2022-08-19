import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._submitButton = this._form.querySelector(".popup__button");
    this._normalButtonText = this._submitButton.textContent;
  }

  confirmDelete(confirmation) {
    this._handleFormSubmit = confirmation;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }

  loadingText(isLoading) {
    if (isLoading === true) {
      this._submitButton.textContent = "Deleting ...";
    } else {
      this._submitButton.textContent = this._normalButtonText;
    }
  }
}

export default PopupWithConfirmation;
