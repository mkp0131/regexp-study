# 정규식 (Regular Expression)
## 문자열에서 원하는 값을 찾기 위해 사용.
1. 대소문자 구별
2. 띄어쓰기 구별
3. 왼쪽부터 오른쪽으로 순차적으로 검색

## 사용법
### 1. /^Hello/ => 해당 단어가 맨앞에 위치
1. **Hello** is Hello => OK!
2. huhuhu Hello is Hello => null

### 2. /Hello$/ => 해당 단어가 맨뒤에 위치
1. Hello is **Hello** => OK!
2. Hello is Hello hahaha => null

### 3. /\$12\$/ => 정규표현식에 속해 있는 특수문자를 검색하고 싶을때 이스케이프 문자(\)를 쓴다.
1. "**$12$** \-\ $25$" => OK!

### 4. /./ => 어던 문자든 하나를 검색
1. "**$**12$ \-\ $25$" => OK!
2. if. /..../ => 4개인 문자 (마지막에 4개가 되지 않을경우 선택하지 않음! / 띄어쓰기 포함)

### 5. /[oyu]/ => o,y,u 중에 일치하는 하나의 문자를 검색
1. "H**o**w do you do?" => OK!
2. if. /[dh]./ => 'd' or 'h'로 시작하는 2개의 알파벳으로 되어있는 단어를 검색
3. . "How **do** you do?" => OK!

### 6. /[a-c]/ => a~c 중에 일치하는 하나의 문자를 검색
1. "**a**bcdefghijklmnopqrstuvwxyz 0123456789" => OK!
2. /[C-Ka-d2-6]/ => C~K, a~d, 2~6 까지 중 하나의 문자를 검색

### 6. /[^cd]/ => ^(캐럿)을 [](대괄호) 안에서 사용하면 not(부정)의 의미 / c,d 가 아닌 문자를 검색
1. "cd**e**fghijklmnopqrstuvwxyz 0123456789" => OK!

### 7. (on|Fr|Tu) => on, Fr, Tu 중 일치하는 문자를 검색
1. "M**on**day Tuesday Friday" => OK!
2. /(Mon|Tues|Fri)day/ => Monday, Tuesday, Friday 중 일치하는 문자를 검색
3. "**Monday** Tuesday Friday" => OK!

참고
> 공부사이트: http://zvon.org/comp/r/tut-Regexp.html