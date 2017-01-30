'use strict';

var btnSetupOpen = document.querySelector('.setup-open');
var windowSetup = document.querySelector('.setup');
var btnSetupClose = windowSetup.querySelector('.setup-close');
var fieldUserName = windowSetup.querySelector('.setup-user-name');
var wizardCoat = windowSetup.querySelector('#wizard-coat');
var wizardEyes = windowSetup.querySelector('#wizard-eyes');
var wizardFireBall = windowSetup.querySelector('.setup-fireball');

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
function getRandomValueInObject(listValue) {
  var randomKeyInRange =
    parseInt(Math.random() * (Object.keys(listValue).length) + 0, 10);
  var listKey = Object.keys(listValue);
  return listValue[listKey[randomKeyInRange]];
}

function alteringColorCoatWizard() {
  wizardCoat.style.fill = getRandomValueInObject(colorsList);
}

function alteringColorEyesWizard() {
  wizardEyes.style.fill = getRandomValueInObject(colorsList);
}

function alteringColorFireBallWizard() {
  wizardFireBall.style.backgroundColor = getRandomValueInObject(colorsList);
}

/*
 * @param{number} length - Length field user name
 */
function setOptionValidityUserName(length) {
  fieldUserName.minLength = 2;
  fieldUserName.maxLength = length;
  fieldUserName.required = true;
}

function checkValidityLengthUserName() {
  if (fieldUserName.value <= '2') {
    fieldUserName.setCustomValidity('Данное поле обязательно к заполнению.' +
      ' Минимальное  кол-во знакова : 2 - что бы помешалось "0о"');
  }
}

/**
 * Set option validity user name;
 */
setOptionValidityUserName(50);

/** Add listener*/
btnSetupOpen.addEventListener('click', openModalWindow);
btnSetupClose.addEventListener('click', closerModalWindow);
wizardCoat.addEventListener('click', alteringColorCoatWizard);
wizardEyes.addEventListener('click', alteringColorEyesWizard);
wizardFireBall.addEventListener('click', alteringColorFireBallWizard);
fieldUserName.addEventListener('input', checkValidityLengthUserName);
