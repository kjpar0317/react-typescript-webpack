# Checkbox 컴포넌트

### Checkbox 컴포넌트

#### 1. CCheckbox

체크박스

| 프로퍼티  | 설명                 | 값                                                                                               | 타입     | 필수 |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------ | -------- | ---- |
| id        | 체크박스 ID          | 여러차트 있을 시 동기화 ID, 단독일 경우 unique한 ID를 쓰거나 안 넣는다                           | string   | N    |
| type      | 체크박스 색깔        | 없음: default (ccheck1)<br> ccheck1: 파랑<br>ccheck2: 녹색 <br> ccheck3: 주황 <br> ccheck4: 빨강 | string   | N    |
| title     | 체크박스 상단 타이틀 | 체크박스 상단 타이틀(없어도 됨(공간 차지함))                                                     | string   | N    |
| items     | 체크박스 items       | [{<br>label: 라벨, <br>checked: 체크박스, <br>넣고 싶은 프로퍼티(value같은 것)<br> },]           | array    | Y    |
| row       | 체크박스 방향        | 없음: default(false)<br>true: 횡 방향<br>false: 종 방향                                          | boolean  | N    |
| fullWidth | 체크박스 너비 영역   | 없음: default(true)<br>true: 전체, false: 일부                                                   | boolean  | N    |
| disabled  | 체크박스 활성화      | 없음: default(false)<br>true: 비활성<br>false: 활성                                              | boolean  | N    |
| onChange  | 변경 시 이벤트 함수  | return: item row                                                                                 | function | N    |
