// 문자 target
var _target = document.body.querySelector('p');
var _txt = _target.innerHTML;

var regExp = /Hello$/;
var result = regExp.exec(_txt);

console.log('', result);