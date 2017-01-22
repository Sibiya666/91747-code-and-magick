'use strict';

/**
 * Создает фон гикстограмма.
 *
 * @constructor
 * @param {object} ctx - Контекст отрисовки.
 * @param {number} x - Коардинаты x.
 * @param {number} y - Коардинаты x.
 * @param {number} width - Ширна фона.
 * @param {number} height - Высота фона.
 * @param {number} offset - Сдвиг подложки.
 */
var paintCloud = function (ctx, x, y, width, height, offset) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x + offset, y + offset, width, height);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x, y, width, height);
};

/**
 * Создает заголовки на фоне.
 *
 * @constructor
 * @param {object} ctx - Контекст отрисовки.
 * @param {string} string - Сообщение, которое нужно напечатать.
 * @param {string} nextString - Сообщение, которое нужно напечатать на второй строчке.
 * @param {number} step - Расстояние между строками.
 */
var paintMsg = function (ctx, string, nextString, step) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(string, 120, 50);
  ctx.fillText(nextString, 120, 50 + step);
};

var bestTime = -1;
/**
 * Определяет лучше время прохождения.
 *
 * @constructor
 * @param {array} times - Массива  времени участников.
 * @return {number} bestTime - Возвращает числож
 */
var getBestTime = function (times) {
  for (var a = 0; a < times.length; a++) {
    var itemTime = parseInt(times[a], 10);
    if (itemTime > bestTime) {
      bestTime = itemTime;
    }
  }
  return bestTime;
};

/**
 * Определяет лучше время прохождения.
 *
 * @constructor
 * @param {object} ctx - Контекст отрисовки.
 * @param {array} times - Массива  времени участников.
 * @param {array} names - Массива  имен участников.
 */
var paintGist = function (ctx, times, names) {
  var step = 0;
  for (var i = 0; i < times.length; i++) {
    if (i !== 0) {
      step += 90;
    }
    var time = parseInt(times[i], 10);
    var MAX_HEIGHT = 150;
    var heightColumn = MAX_HEIGHT / bestTime * time;
    ctx.font = '16px PT Mono';
    ctx.fillText(time, 120 + step, 240 - heightColumn);
    var name = names[i];
    var saturate = 0.1 + Math.random();
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(3, 4 , 255, ' + saturate + ')';
    }
    ctx.fillRect(120 + step, 250 - heightColumn, 40, heightColumn);
    ctx.fillStyle = '#000';
    ctx.fillText(name, 120 + step, 270);
  }
};

window.renderStatistics = function (ctx, names, times) {
  paintCloud(ctx, 100, 10, 420, 270, 10);
  paintMsg(ctx, 'Ура вы победили!', 'Список результатов!', 20);
  getBestTime(times);
  paintGist(ctx, times, names);
};
