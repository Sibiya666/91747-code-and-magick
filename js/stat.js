'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов!', 120, 70);
  var step = 0;
  var bestTime = -1;
  for (var a = 0; a < times.length; a++) {
    var itemTime = parseInt(times[a], 10);
    if (itemTime > bestTime) {
      bestTime = itemTime;
    }
  }
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
