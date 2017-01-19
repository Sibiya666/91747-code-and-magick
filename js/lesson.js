var fireballSize = 22;
var getFireballSpeed = function (left) {
    var fireballSpeed = left ? 5 : 16;
    return fireballSpeed;
};
var wizardSpeed = 3;
var wizardWidth = 50;
var PROPORTION_COEFFICIENT = 1.337;
var getWizardHeight = function () {
    return PROPORTION_COEFFICIENT * wizardWidth;
};
var getWizardX = function (width) {
    return width/2 - wizardWidth/2;
};
var getWizardY = function (height) {
    return (height/3)*2 - getWizardHeight()
};

