// var BuyItem = function() {
//   this.item = item;
//   this.price = price;
//   this.quntity = quntity;
//   this.total = total;
// };

var App = {};

App.init = function () {
  var points = [];
  var i = 1;
  for (i; i <= 6; i++) {
    var point = new Point(i);
    point.init();
    points.push(point);
    point.getParam = function () {
      return 'param';
    };
    document.body.appendChild(point.getElement());
  }
  console.log(points);
};

App.init();