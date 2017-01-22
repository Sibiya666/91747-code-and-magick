'use strict';

var paintCloud = function (ctx, x, y, width, height, offset) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x + offset, y + offset, width, height);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x, y, width, height);
};

var paintMsg = function (ctx, string, nextString, step) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(string, 120, 50);
  ctx.fillText(nextString, 120, 50 + step);
};

var bestTime = -1;
var getBestTime = function (times) {
  for (var a = 0; a < times.length; a++) {
    var itemTime = parseInt(times[a], 10);
    if (itemTime > bestTime) {
      bestTime = itemTime;
    }
  }
  return bestTime;
};

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
    var saturate = Math.random();
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(3, 4 , 255, ' + saturate + ')';
    }
    ctx.fillRect(120 + step, 250 - heightColumn, 40, heightColumn);
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(name, 120 + step, 270);
  }
};

window.renderStatistics = function (ctx, names, times) {
  paintCloud(ctx, 100, 10, 420, 270, 10);
  paintMsg(ctx, 'Ура вы победили!', 'Список результатов!', 20);
  getBestTime(times);
  paintGist(ctx, times, names);
};
