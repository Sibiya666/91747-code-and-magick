'use strict';

var btnSetupOpen = document.querySelector('.setup-open');
var windowSetup = document.querySelector('.setup');
var btnSetupClose = windowSetup.querySelector('.setup-close');
var fieldUserName = windowSetup.querySelector('.setup-user-name');
var wizardCoat = windowSetup.querySelector('#wizard-coat');
var wizardEyes = windowSetup.querySelector('#wizard-eyes');
var wizardFireBall = windowSetup.querySelector('.setup-fireball');
var btnSaveWizardOptions = windowSetup.querySelector('.setup-submit');
var LENGTH_FIELD_USER_NAME = 50;
/**
 * @readonly;
 * @enum {string};
 */
var colorsList = {
  BlACK: 'black',
  RED: 'red',
  BLUE: 'blue',
  YELLOW: 'yellow',
  GREEN: 'green',
  REBECCAPURPLE: 'rebeccapurple',
  VIOLET: 'violet',
  AQUA: 'aqua'
};

/**
 * @readonly
 * @enum {number};
 * */
var keyCodeList = {
  ESC: 27,
  ENTER: 13
};

function toggleBtnSetupAttr() {
  if (windowSetup.classList.contains('invisible')) {
    btnSetupOpen.setAttribute('aria-pressed', false);
    btnSetupClose.setAttribute('aria-pressed', true);
  } else {
    btnSetupOpen.setAttribute('aria-pressed', true);
    btnSetupClose.setAttribute('aria-pressed', false);
  }
}

function toggleClassModalWindow() {
  windowSetup.classList.toggle('invisible');
}

function toggleModalWindow(event) {
  if (event.keyCode === keyCodeList['ENTER'] || event.type === 'click') {
    toggleClassModalWindow();
    toggleBtnSetupAttr();
    if (isInvisible()) {
      document.addEventListener('keydown', pressEscToCloseWindow);
    }
  }
}

/**
 * @return {boolean};
 */
function isInvisible() {
  return !windowSetup.classList.contains('invisible');
}

function pressEscToCloseWindow() {
  if (event.keyCode === keyCodeList['ESC'] && isInvisible()) {
    toggleClassModalWindow();
    toggleBtnSetupAttr();
    document.removeEventListener('keydown', pressEscToCloseWindow);
  }
}

function pressSaveBtnToCloseWindow(event) {
  event.preventDefault();
  toggleModalWindow(event);
}
/**
 * @param {colorsList} listValue - list Colors;
 * @return {string} Return value sting;
 */
function getRandomValueFromObject(listValue) {
  var randomKeyInRange =
    parseInt(Math.random() * (Object.keys(listValue).length) + 0, 10);
  var listKey = Object.keys(listValue);
  return listValue[listKey[randomKeyInRange]];
}

function changeColorCoatWizard() {
  wizardCoat.style.fill = getRandomValueFromObject(colorsList);
}

function changeColorEyesWizard() {
  wizardEyes.style.fill = getRandomValueFromObject(colorsList);
}

function changeColorFireBallWizard() {
  wizardFireBall.style.backgroundColor = getRandomValueFromObject(colorsList);
}

/*
 * @param {number} length - Length field user name
 */
function setValidityOptionUserName(length) {
  fieldUserName.minLength = 6;
  fieldUserName.maxLength = length;
  fieldUserName.required = true;
}

function checkValidityLengthUserName() {
  if (fieldUserName.value <= '6') {
    fieldUserName.setCustomValidity('Данное поле обязательно к заполнению.' +
      ' Минимальное  кол-во знакова : 6');
  }
}

/** Set option validity user name. */
setValidityOptionUserName(LENGTH_FIELD_USER_NAME);

/** Listener event btn setup open. */
function btnSetupOpenHandler() {
  btnSetupOpen.addEventListener('click', toggleModalWindow);
  btnSetupOpen.addEventListener('keydown', toggleModalWindow);
}

/** Listener event btn setup close. */
function btnSetupCloseHandler() {
  btnSetupClose.addEventListener('click', toggleModalWindow);
  btnSetupClose.addEventListener('keydown', toggleModalWindow);
}

/** Listener event btn setup save. */
function btnSaveHeandler() {
  btnSaveWizardOptions.addEventListener('click', pressSaveBtnToCloseWindow);
  btnSaveWizardOptions.addEventListener('keydown', pressSaveBtnToCloseWindow);
}

/** Wizard event listener. */
function wizardHandler() {
  wizardCoat.addEventListener('click', changeColorCoatWizard);
  wizardEyes.addEventListener('click', changeColorEyesWizard);
  wizardFireBall.addEventListener('click', changeColorFireBallWizard);
}

/** Add listener. */
btnSetupOpenHandler();
btnSetupCloseHandler();
btnSaveHeandler();
wizardHandler();
fieldUserName.addEventListener('input', checkValidityLengthUserName);
