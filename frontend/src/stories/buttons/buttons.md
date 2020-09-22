# Button 컴포넌트

### Button 컴포넌트

#### 1. CButton

일반 버튼 컴포넌트

| 프로퍼티  | 설명          | 값                                                                                            | 타입       | 필수 |
| --------- | ------------- | --------------------------------------------------------------------------------------------- | ---------- | ---- |
| type      | 버튼 색깔     | 없음: default (btn1)<br> btn1: 파랑<br>btn2: 녹색 <br> btn3: 주황 <br> btn4: 빨강             | string     | N    |
| variant   | 버튼 스타일   | 없음: default (contained)<br>contained: 색깔 채워진 스타일 <br> outlined: 버튼 안 색깔 비워짐 | string     | N    |
| size      | 버튼 크기     | 없음 : default (medium)<br>small: 작음<br>medium: 중간 <br>large: 큼                          | string     | N    |
| sicon     | 앞버튼 아이콘 | https://material-ui.com/components/material-icons/#material-icons 참조                        | string     | N    |
| eicon     | 뒤버튼 아이콘 | https://material-ui.com/components/material-icons/#material-icons 참조                        | string     | N    |
| validated | 필수값        | 없음 : default (true)<br> true: 버튼 활성화<br>false: 버튼 비활성화                           | boolean    | N    |
| style     | CSS           | CSS style                                                                                     | CSS object | N    |
| onClick   | 클릭 이벤트   | return: event: React.MouseEvent<HTMLButtonElement, MouseEvent>                                | function   | N    |

### 2. CButtonGroup 컴포넌트

그룹 버튼 컴포넌트

| 프로퍼티 | 설명        | 값                                                                                                                                                                      | 타입   | 필수 |
| -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---- |
| id       | 버튼 id     | id                                                                                                                                                                      | string | Y    |
| type     | 버튼 색깔   | 없음: default (btn1)<br> btn1: 파랑<br>btn2: 녹색 <br> btn3: 주황 <br> btn4: 빨강                                                                                       | string | N    |
| variant  | 버튼 스타일 | 없음: default (contained)<br>contained: 색깔 채워진 스타일 <br> outlined: 버튼 안 색깔 비워짐                                                                           | string | N    |
| size     | 버튼 크기   | 없음 : default (medium)<br>small: 작음<br>medium: 중간 <br>large: 큼                                                                                                    | string | N    |
| items    | 버튼 items  | {<br> name : 버튼이름 (필수)<br> disabled: 버튼 활성화 (필수 아님, default: false) <br> onClick: return : e: React.MouseEvent<HTMLButtonElement, MouseEvent>(필수)<br>} | object | Y    |

### 3. CIconButton 컴포넌트

아이콘 버튼 컴포넌트

| 프로퍼티 | 설명        | 값                                                                                | 타입     | 필수 |
| -------- | ----------- | --------------------------------------------------------------------------------- | -------- | ---- |
| icon     | 버튼 아이콘 | https://material-ui.com/components/material-icons/#material-icons 참조            | string   | Y    |
| type     | 버튼 색깔   | 없음: default (btn1)<br> btn1: 파랑<br>btn2: 녹색 <br> btn3: 주황 <br> btn4: 빨강 | string   | N    |
| disabled | 버튼 활성화 | 없음: default (true) <br>true: 버튼 활성화 <br> false: 버튼 비활성화              | boolean  | N    |
| size     | 버튼 크기   | 없음 : default (medium)<br>small: 작음<br>medium: 중간 <br>large: 큼              | string   | N    |
| edge     | 버튼 위치   | 없음 : default (false)<br> start : 앞 <br> end : 뒤                               | string   | N    |
| tooltip  | 툴팁        | 텍스트                                                                            | string   | N    |
| onClick  | 클릭 이벤트 | return: event: React.MouseEvent<HTMLButtonElement, MouseEvent>                    | function | N    |

### 4. CSplitButton 컴포넌트

선택 버튼 컴포넌트

| 프로퍼티 | 설명        | 값                                                                                            | 타입     | 필수 |
| -------- | ----------- | --------------------------------------------------------------------------------------------- | -------- | ---- |
| id       | 버튼 id     | id                                                                                            | string   | Y    |
| type     | 버튼 색깔   | 없음: default (btn1)<br> btn1: 파랑<br>btn2: 녹색 <br> btn3: 주황 <br> btn4: 빨강             | string   | N    |
| variant  | 버튼 스타일 | 없음: default (contained)<br>contained: 색깔 채워진 스타일 <br> outlined: 버튼 안 색깔 비워짐 | string   | N    |
| size     | 버튼 크기   | 없음 : default (medium)<br>small: 작음<br>medium: 중간 <br>large: 큼                          | string   | N    |
| items    | 버튼 items  | {<br> name : 버튼이름 (필수)<br> disabled: 버튼 활성화 (필수 아님, default: false) <br>}      | object   | Y    |
| onClick  | 클릭 이벤트 | return: index: number                                                                         | function | N    |
