'use strict';

/**
 * Create background.
 *
 * @function
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {number} x - Coordinate x.
 * @param {number} y - Coordinate y.
 * @param {number} width - Width background.
 * @param {number} height - Height background.
 * @param {number} offset - Offset background.
 */
function paintCloud(ctx, x, y, width, height, offset) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x + offset, y + offset, width, height);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x, y, width, height);
}

/**
 * Create message on background.
 *
 * @function
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {string} string - Message.
 * @param {string} nextString - Next message.
 * @param {number} step - Line height.
 */
function paintMessage(ctx, string, nextString, step) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(string, 120, 50);
  ctx.fillText(nextString, 120, 50 + step);
}

/**
 * Return best time users.
 *
 * @function
 * @param {Array.<number>} times - Time of users.
 * @return {number} bestTime - Return number
 */
var bestTime = function (times) {
  times.sort();
  return times[times.length - 1];
};

/**
 * Paint bar chart.
 *
 * @function
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {Array.<number>} times - Times of users.
 * @param {Array.<number>} names - Names of users.
 */
function paintBarChart(ctx, times, names) {
  var step = 0;
  for (var i = 0; i < times.length; i++) {
    if (i !== 0) {
      step += 90;
    }
    var time = parseInt(times[i], 10);
    var MAX_HEIGHT = 150;
    var heightColumn = MAX_HEIGHT / bestTime(times) * time;
    ctx.font = '16px PT Mono';
    ctx.fillText(time, 120 + step, 240 - heightColumn);
    var name = names[i];
    var saturate = Math.random() + 0.1;
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(3, 4 , 255, ' + saturate + ')';
    }
    ctx.fillRect(120 + step, 250 - heightColumn, 40, heightColumn);
    ctx.fillStyle = '#000';
    ctx.fillText(name, 120 + step, 270);
  }
}

window.renderStatistics = function (ctx, names, times) {
  paintCloud(ctx, 100, 10, 420, 270, 10);
  paintMessage(ctx, 'Ура вы победили!', 'Список результатов!', 20);
  paintBarChart(ctx, times, names);
};
