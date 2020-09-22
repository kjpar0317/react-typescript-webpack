# Textfield 컴포넌트

### Textfield 컴포넌트

#### 1. CTextfield

textfield 컴포넌트

| 프로퍼티     | 설명                      | 값                                                                                                                     | 타입           | 필수 |
| ------------ | ------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------- | ---- |
| id           | textfield id              | textfield id                                                                                                           | string         | Y    |
| type         | textfield 타입            | 없음: default (text)<br> text: 문자형<br>number: 숫자형 <br> password: 패스워드형 <br> date: 날짜형<br> hidden: 숨김형 | string         | N    |
| value        | textfield 값              | textfield 값                                                                                                           | string, number | Y    |
| defaultValue | textfield 초기 셋팅 value | textfield 초기 셋팅 value                                                                                              | string, number | N    |
| label        | textfield 라벨            | textfield 상단 라벨 (필수 아님, 공간 차지함)                                                                           | string         | N    |
| variant      | textfield 스타일          | 없음: default (outlined)<br>standard: 일반 <br> outlined: border있음<br>filled: 일반 색깔 채워짐                       | string         | N    |
| margin       | textfield 마진            | 없음: default (dense)<br>dense: 밀집 <br> none: 없음<br>normal: 일반                                                   | string         | N    |
| style        | CSS                       | CSS style                                                                                                              | CSS object     | N    |
| required     | 필수값                    | 없음: default (false)<br>true: 필수값 <br> false: 필수값 아님                                                          | boolean        | N    |
| onChange     | 변경 시 이벤트 함수       | return: (event: React.ChangeEvent<HTMLTextAreaElement>)                                                                | function       | N    |
| onKeyPress   | 키 눌렀을 시 이벤트 함수  | return: (data: 데이터)                                                                                                 | function       | N    |
