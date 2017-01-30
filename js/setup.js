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
var WIZARD_COAT_COLOR_LIST = {
  COLOR1: 'rgb(101, 137, 164)',
  COLOR2: 'rgb(241, 43, 107)',
  COLOR3: 'rgb(146, 100, 161)',
  COLOR4: 'rgb(56, 159, 117)',
  COLOR5: 'rgb(215, 210, 55)',
  COLOR6: 'rgb(0, 0, 0)'
};

/**
 * @readonly
 * @enum {string}
 */
var WIZARD_EYES_COLOR_LIST = {
  BlACK: 'black',
  RED: 'red',
  BLUE: 'blue',
  YELLOW: 'yellow',
  GREEN: 'green'
};

/**
 * @readonly
 * @enum {string}
 */
var WIZARD_FIRE_BALL_COLOR_LIST = {
  COLOR1: '#ee4830',
  COLOR2: '#30a8ee',
  COLOR3: '#5ce6c0',
  COLOR4: '#e848d5',
  COLOR5: '#e6e848'
};


function openModalWindow() {
  windowSetup.classList.remove('invisible');
}

function closerModalWindow() {
  windowSetup.classList.add('invisible');
}

/**
 * @param {Object} listValue - list;
 * @return {string} Return value sting;
 */
function randomValueInObject(listValue) {
  var randomKeyInRange =
    parseInt(Math.random() * (Object.keys(listValue).length) + 0, 10);
  var listKey = Object.keys(listValue);
  return listValue[listKey[randomKeyInRange]];
}

function changedColorCoatWizard() {
  wizardCoat.style.fill = randomValueInObject(WIZARD_COAT_COLOR_LIST);
}

function changedColorEyesWizard() {
  wizardEyes.style.fill = randomValueInObject(WIZARD_EYES_COLOR_LIST);
}

function changedColorFireBallWizard() {
  wizardFireBall.style.backgroundColor = randomValueInObject(WIZARD_FIRE_BALL_COLOR_LIST);
}

/*
 * @param{number} length - Length field user name
 */
function installOptionValidityUserName(length) {
  fieldUserName.maxLength = length;
  fieldUserName.required = true;
}

installOptionValidityUserName(50);

/** Add listener*/
btnSetupOpen.addEventListener('click', openModalWindow);
btnSetupClose.addEventListener('click', closerModalWindow);
wizardCoat.addEventListener('click', changedColorCoatWizard);
wizardEyes.addEventListener('click', changedColorEyesWizard);
wizardFireBall.addEventListener('click', changedColorFireBallWizard);
