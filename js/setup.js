'use strict';

var btnSetupOpen = document.querySelector('.setup-open');
var btnSetupClose = document.querySelector('.setup-close');
var windowSetup = document.querySelector('.setup');
var fieldUserName = document.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var wizardFireBall = document.querySelector('.setup-fireball');
var wizardCoatColorList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var wizardEyesColorList = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardFireBallColorList = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

function shiftColorCoatWizard() {
  wizardCoat.style.fill = wizardCoatColorList[getRandomIndexInRange(0, 5)];
}

function shiftColorEyesWizard() {
  wizardEyes.style.fill = wizardEyesColorList[getRandomIndexInRange(0, 5)];
}

function shiftColorFireBallWizard() {
  wizardFireBall.style.backgroundColor = wizardFireBallColorList[getRandomIndexInRange(0, 5)];
}

fieldUserName.setAttribute('maxlength', '50');
fieldUserName.required = true;
btnSetupOpen.addEventListener('click', openModalWindow);
btnSetupClose.addEventListener('click', closerModalWindow);
wizardCoat.addEventListener('click', shiftColorCoatWizard);
wizardEyes.addEventListener('click', shiftColorEyesWizard);
wizardFireBall.addEventListener('click', shiftColorFireBallWizard);

