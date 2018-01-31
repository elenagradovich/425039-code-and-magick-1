'use strict';

var CLOUDE_WIDTH = 420;
var CLOUDE_HEIGHT = 270;
var CLOUDE_X = 100;
var CLOUDE_Y = 10;
var HISTOGRAM_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_SHIFT = 50;
var CONTENT_MARGIN = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUDE_WIDTH, CLOUDE_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = ('16px PT Mono');
  ctx.fillText('Ура вы победили!', CLOUDE_X + CONTENT_MARGIN * 3, CLOUDE_Y + CONTENT_MARGIN);
  ctx.fillText('Список результатов:', CLOUDE_X + CONTENT_MARGIN * 3, CLOUDE_Y + CONTENT_MARGIN * 2);

  function getMaxNumber() {
    var max = -1;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  }

  function getRandomColor() {
    return 'rgba(0, 0, 255, ' + (1 - Math.random()) + ')';
  }

  function identifyColorChart(i) {
    return names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();
  }

  var step = HISTOGRAM_HEIGHT / getMaxNumber();

  var renderColumnChart = function (i, x) {
    var columnHeight = times[i] * step;

    ctx.fillStyle = identifyColorChart(i);
    ctx.fillRect(x, CLOUDE_Y + CONTENT_MARGIN * 4 + HISTOGRAM_HEIGHT - columnHeight, COLUMN_WIDTH, columnHeight);
  };

  var renderCaptionsHistogram = function (i, x) {
    ctx.fillStyle = '#000';

    ctx.fillText(names[i], x, CLOUDE_Y + CONTENT_MARGIN * 3);
    ctx.fillText(Math.floor(times[i]), x, CLOUDE_Y + CONTENT_MARGIN * 5 + HISTOGRAM_HEIGHT);
  };

  var positionColumnX = CLOUDE_X + CONTENT_MARGIN;
  for (var i = 0; i < names.length; i++) {
    renderColumnChart(i, positionColumnX);
    renderCaptionsHistogram(i, positionColumnX);
    positionColumnX += COLUMN_WIDTH + COLUMN_SHIFT;
  }
};
