'use strict';

var btnSetupOpen = document.querySelector('.setup-open');
var windowSetup = document.querySelector('.setup');
var btnSetupClose = windowSetup.querySelector('.setup-close');
var fieldUserName = windowSetup.querySelector('.setup-user-name');
var wizardCoat = windowSetup.querySelector('#wizard-coat');
var wizardEyes = windowSetup.querySelector('#wizard-eyes');
var wizardFireBall = windowSetup.querySelector('.setup-fireball');
var LENGTH_FIELD_USER_NAME = 50;
/**
 * @readonly
 * @enum {string}
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

function openModalWindow() {
  windowSetup.classList.remove('invisible');
}

function closerModalWindow() {
  windowSetup.classList.add('invisible');
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
function setOptionValidityUserName(length) {
  fieldUserName.minLength = 2;
  fieldUserName.maxLength = length;
  fieldUserName.required = true;
}

function checkValidityLengthUserName() {
  if (fieldUserName.value <= '2') {
    fieldUserName.setCustomValidity('Данное поле обязательно к заполнению.' +
      ' Минимальное  кол-во знакова : 6');
  }
}

/**
 * Set option validity user name;
 */
setOptionValidityUserName(LENGTH_FIELD_USER_NAME);

/** Add listener*/
btnSetupOpen.addEventListener('click', openModalWindow);
btnSetupClose.addEventListener('click', closerModalWindow);
wizardCoat.addEventListener('click', changeColorCoatWizard);
wizardEyes.addEventListener('click', changeColorEyesWizard);
wizardFireBall.addEventListener('click', changeColorFireBallWizard);
fieldUserName.addEventListener('input', checkValidityLengthUserName);
