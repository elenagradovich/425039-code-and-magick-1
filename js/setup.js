'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var randomValue = function (date) {
  var index = Math.floor(Math.random() * date.length);
  return date[index];
};

var createWizardObject = function () {
  return {
    name: randomValue(wizardFirstNames) + ' ' + randomValue(wizardSurnames),
    coatColor: randomValue(coatColors),
    eyesColor: randomValue(eyesColors)
  };
};
var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards.push(createWizardObject());
}

var similarListWizards = document.querySelector('.setup-similar-list'); // элемент, в который вставляются похожие маги
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content; // шаблон, который копируется

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListWizards.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
