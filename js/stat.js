'use strict';

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var names = ['Саша', 'Васа', 'Рус', 'Вы'];
var times = [14, 20, 30, 40];


window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(120, 20, 420, 270);

  /*ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);*/

  ctx.beginPath();
  ctx.arc(100, 82.5, 20, 0, 12);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(230, 82.5, 30, 0, 12);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(260, 82.5, 20, 0, 12);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(190, 122.5, 30, 0, 12);
  ctx.stroke();



};

renderStatistics(ctx, names, times);
