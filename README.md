# 정규식 (Regular Expression)
## 문자열에서 원하는 값을 찾기 위해 사용.

## 사용법
### 1. /^Hello/ => 해당 단어가 맨앞에 위치
1. **Hello** is Hello => OK!
2. huhuhu Hello is Hello => null

### 2. /Hello$/ => 해당 단어가 맨뒤에 위치
1. Hello is **Hello** => OK!
2. Hello is Hello hahaha => null
