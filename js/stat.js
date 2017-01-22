'use strict';

/**
 * Create background.
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {number} x - Coordinate x.
 * @param {number} y - Coordinate y.
 * @param {number} width - Width background.
 * @param {number} height - Height background.
 */
function paintCloud(ctx, x, y, width, height) {
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x, y, width, height);
}

/**
 * Create message on background.
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {string} string - Message.
 * @param {string} nextString - Next message.
 * @param {number} step - Line height.
 */
function paintMessage(ctx, string, nextString, step) {
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  var COORDINATE_STRING_X = 120;
  var COORDINATE_STRING_Y = 50;
  ctx.fillText(string, COORDINATE_STRING_X, COORDINATE_STRING_Y);
  ctx.fillText(nextString, COORDINATE_STRING_X, COORDINATE_STRING_Y + step);
}

/**
 * Return best time users.
 * @param {Array.<number>} times - Time of users.
 * @return {number} bestTime - Return number.
 */
var bestTime = function (times) {
  /**
   * Return correct sequence of number.
   * @param {number} item - Element array.
   * @param {number} itemNext - Element array.
   * @return {number} item - Return number.
   */
  var correctSequenceNumber = function (item, itemNext) {
    return item - itemNext;
  };

  var timesSort = times.slice(0);
  timesSort.sort(correctSequenceNumber);
  return timesSort[timesSort.length - 1];
};

/** Return saturation color.
 * @param {number} min - min saturation color.
 * @param {number} max - max saturation color.
 * @return {number} saturate  - Saturation color.*/
var saturate = function (min, max) {
  var minValue = min;
  var maxValue = max;
  return Math.random() * (maxValue - minValue) + minValue;
};

/**
 * Change color column.
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {string} name - Name users.
 * @param {function} saturateColor - Saturate color;
 */
function colorColumn(ctx, name, saturateColor) {
  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'rgba(3, 4 , 255, ' + saturateColor + ')';
  }
}
/**
 * Paint bar chart.
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {Array.<number>} times - Times of users.
 * @param {Array.<string>} names - Names of users.
 */
function paintBarChart(ctx, times, names) {
  var step = 0;
  var OFFSET = 90;
  for (var i = 0; i < times.length; i++) {
    if (i !== 0) {
      step += OFFSET;
    }
    var time = parseInt(times[i], 10);
    var MAX_HEIGHT = 150;
    var heightColumn = MAX_HEIGHT / bestTime(times) * time;
    var COORDINATE_COLUMN_X = 120;
    var COORDINATE_COLUMN_Y = 240;
    var COORDINATE_SCORE_Y = 250;
    var COORDINATE_NAME_Y = 270;
    var WIDTH_COLUMN = 40;
    var name = names[i];
    colorColumn(ctx, name, saturate(0.1, 1));
    ctx.fillRect(COORDINATE_COLUMN_X + step, COORDINATE_SCORE_Y - heightColumn, WIDTH_COLUMN, heightColumn);
    ctx.fillStyle = '#000000';
    ctx.fillText(time, COORDINATE_COLUMN_X + step, COORDINATE_COLUMN_Y - heightColumn);
    ctx.fillText(name, COORDINATE_COLUMN_X + step, COORDINATE_NAME_Y);
  }
}

/**
 * Reset shadow Canvas.
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 */
function shadowReset(ctx) {
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
}

window.renderStatistics = function (ctx, names, times) {
  paintCloud(ctx, 100, 10, 420, 270);
  shadowReset(ctx);
  paintMessage(ctx, 'Ура вы победили!', 'Список результатов!', 20);
  paintBarChart(ctx, times, names);
};
