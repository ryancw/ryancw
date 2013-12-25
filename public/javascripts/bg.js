var bgs = ['IMG_1602.jpg', 'IMG_1485.jpg', 'IMG_1611.jpg', 'IMG_1580.jpg', 'IMG_1592.jpg', 'IMG_1704.jpg', 'IMG_1697.jpg']

var randomBackground = function(weather) {
  var curHour = (new Date()).getHours();
  if (curHour > 17 || curHour < 7) {
    bgs = ['IMG_1602.jpg', 'IMG_1485.jpg', 'IMG_1611.jpg', 'IMG_1580.jpg', 'IMG_1592.jpg', 'IMG_1704.jpg'];
  } else {
    bgs = ['IMG_1697.jpg']
  }

  var path = 'images/bg/';
  i = Math.floor(Math.random()*bgs.length);
  var url = (path+bgs[i]);
  return 'url(' + url + ') no-repeat center center fixed';
};
