'use strict';

/**
 * Create background.
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {number} x - Coordinate x.
 * @param {number} y - Coordinate y.
 * @param {number} width - Width background.
 * @param {number} height - Height background.
 */
function drwCloud(ctx, x, y, width, height) {
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
function drwMessage(ctx, string, nextString, step) {
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
var getBestTime = function (times) {
  /**
   * Return correct sequence of number.
   * @param {number} item - Element array.
   * @param {number} itemNext - Element array.
   * @return {number}
   */
  function getCorrectSequenceNumber(item, itemNext) {
    return item - itemNext;
  }

  var timesNew = times.slice(0);
  timesNew.sort(getCorrectSequenceNumber);
  return timesNew[timesNew.length - 1];
};

/**
 * Return saturation color.
 * @param {number} min - min saturation color.
 * @param {number} max - max saturation color.
 * @return {number} saturate  - Saturation color.
 */
var getSaturate = function (min, max) {
  return Math.random() * (max - min) + min;
};

/**
 * Change color column.
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {string} name - Users Name.
 * @param {number} saturateColor - Saturate color;
 */
function colorColumn(ctx, name, saturateColor) {
  ctx.fillStyle = (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(3, 4 , 255, '
    + saturateColor + ')';
}

/**
 * drw bar chart.
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {Array.<number>} times - Users Time.
 * @param {Array.<string>} names - Users Name.
 */
function drwBarChart(ctx, times, names) {
  var step = 0;
  var OFFSET = 90;

  for (var i = 0; i < times.length; i++) {

    if (i !== 0) {
      step += OFFSET;
    }

    var time = parseInt(times[i], 10);
    var MAX_HEIGHT = 150;
    var heightColumn = MAX_HEIGHT / getBestTime(times) * time;
    var COORDINATE_COLUMN_X = 120;
    var COORDINATE_COLUMN_Y = 240;
    var COORDINATE_SCORE_Y = 250;
    var COORDINATE_NAME_Y = 270;
    var WIDTH_COLUMN = 40;
    var name = names[i];

    colorColumn(ctx, name, getSaturate(0.1, 1));

    ctx.fillRect(COORDINATE_COLUMN_X + step, COORDINATE_SCORE_Y - heightColumn,
        WIDTH_COLUMN, heightColumn);
    ctx.fillStyle = '#000000';
    ctx.fillText(time, COORDINATE_COLUMN_X + step,
        COORDINATE_COLUMN_Y - heightColumn);
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

/**
 * Create message on background.
 * @param {CanvasRenderingContext2D} ctx - Rendering context.
 * @param {Array.<string>} names - Users Name.
 * @param {Array.<number>} times - Users Time.
 */
window.renderStatistics = function (ctx, names, times) {
  drwCloud(ctx, 100, 10, 420, 270);
  shadowReset(ctx);
  drwMessage(ctx, 'Ура вы победили!', 'Список результатов!', 20);
  drwBarChart(ctx, times, names);
};
