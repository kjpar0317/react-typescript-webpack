# Tab 컴포넌트

### Tab 컴포넌트

#### 1. CTabs

상위 tab 컴포넌트

| 프로퍼티 | 설명                | 값                                                                                                   | 타입           | 필수 |
| -------- | ------------------- | ---------------------------------------------------------------------------------------------------- | -------------- | ---- |
| value    | 현재 값             | 현재 값                                                                                              | string, number | Y    |
| type     | tab 색깔            | 없음: default (ctabs1)<br> ctabs1: 파랑<br>ctabs2: 녹색 <br> ctabs3: 주황 <br> ctabs4: 빨강          | string         | N    |
| variant  | 탭 스타일           | 없음 : default(standard) <br>standard: 일반탭<br>scrollable: 스크롤 탭<br>fullWidth: 앞 <br>top : 위 | string         | N    |
| onChange | 변경 시 이벤트 함수 | return: (event: React.ChangeEvent<{}>, newValue: number)                                             | function       | N    |

#### 2. CTab

상단 tab 컴포넌트

| 프로퍼티 | 설명        | 값                                                                                     | 타입   | 필수 |
| -------- | ----------- | -------------------------------------------------------------------------------------- | ------ | ---- |
| label    | 라벨        | 탭 라벨                                                                                | string | Y    |
| width    | 탭 너비     | 탭 너비                                                                                | number | N    |
| type     | tab 안 색깔 | 없음: default (ctab1)<br> ctab1: 파랑<br>ctab2: 녹색 <br> ctab3: 주황 <br> ctab4: 빨강 | string | N    |

#### 3. CTabPanel

하단 tab 컴포넌트

| 프로퍼티 | 설명       | 값            | 타입           | 필수 |
| -------- | ---------- | ------------- | -------------- | ---- |
| index    | 탭 index   | 탭 index      | number, string | Y    |
| value    | 현재 index | default value | number, string | Y    |
