const tax = 2013;
if (tax >= 2019) {
  console.log('消費税は10%です');
} else if (tax >= 2014) {
  console.log('消費税は8%です');
} else {
  console.log('消費税は5%以下です');
}

let weather = '台風';

switch (weather) {
  case '晴れ':
    console.log('今日は晴れです!');
    break;
  case '曇り':
    console.log('今日は曇りです!');
    break;
  case '雨':
    console.log('今日は雨です!') ;
    break;
  case '雪':
    console.log('今日は雪です!');
    break;
  case '台風':
    console.log('今日は台風です!');
    break;
  case '雷':
    console.log('今日は雷です!');
    break;
    
  default:
    console.log('本日の天気は予測不能です!');
    break;
}