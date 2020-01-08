// 문자 target
var _txt = "Hello, world! Hello2, world! Hello";

// 정규식 패턴
var regExp = /Hello$/;
var result = _txt.replace(regExp, '<span style=\"color: red;\">추출</span>');

// Html View
document.querySelector('.js-origin-txt').innerHTML = _txt;
document.querySelector('.js-reg-exp').innerHTML = regExp;
document.querySelector('.js-export-txt').innerHTML = result;
