// 문자 target
var _txt = "cat cat";

// 정규식 패턴
var regExp = /..\b/;
var result = _txt.replace(regExp, '<span style=\"color: red;\">추출</span>');

// Html View
document.querySelector('.js-origin-txt').innerText = _txt;
document.querySelector('.js-reg-exp').innerText = regExp;
document.querySelector('.js-export-txt').innerText = result;
