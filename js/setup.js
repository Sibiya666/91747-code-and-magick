'use strict';

var btnSetupOpen = document.querySelector('.setup-open');
var windowSetup = document.querySelector('.setup');
var btnSetupClose = windowSetup.querySelector('.setup-close');
var fieldUserName = windowSetup.querySelector('.setup-user-name');
var wizardCoat = windowSetup.querySelector('#wizard-coat');
var wizardEyes = windowSetup.querySelector('#wizard-eyes');
var wizardFireBall = windowSetup.querySelector('.setup-fireball');
var WIZARD_COAT_COLOR_LIST = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR_LIST = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIRE_BALL_COLOR_LIST = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

/**
 * Return random index in range.
 * @param {number} min - min number.
 * @param {number} max - max number.
 * @return {number} - Return number.
 */
function getRandomIndexInRange(min, max) {
  return parseInt(Math.random() * (max - min) + min, 10);
}

function openModalWindow() {
  windowSetup.classList.remove('invisible');
}

function closerModalWindow() {
  windowSetup.classList.add('invisible');
}

function changedColorCoatWizard() {
  wizardCoat.style.fill = WIZARD_COAT_COLOR_LIST[getRandomIndexInRange(0, 5)];
}

function changedColorEyesWizard() {
  wizardEyes.style.fill = WIZARD_EYES_COLOR_LIST[getRandomIndexInRange(0, 5)];
}

function changedColorFireBallWizard() {
  wizardFireBall.style.backgroundColor = WIZARD_FIRE_BALL_COLOR_LIST[getRandomIndexInRange(0, 5)];
}

/*
 * @param{number} length - Length field user name
 */
function installLengthUserName(length) {
  fieldUserName.maxLength = length;
  fieldUserName.required = true;
}

installLengthUserName(50);

/** Add listener*/
btnSetupOpen.addEventListener('click', openModalWindow);
btnSetupClose.addEventListener('click', closerModalWindow);
wizardCoat.addEventListener('click', changedColorCoatWizard);
wizardEyes.addEventListener('click', changedColorEyesWizard);
wizardFireBall.addEventListener('click', changedColorFireBallWizard);


