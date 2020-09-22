# Select 컴포넌트

### Select 컴포넌트

#### 1. CSelect

SelectBox 컴포넌트

| 프로퍼티     | 설명                | 값                                                                                            | 타입           | 필수 |
| ------------ | ------------------- | --------------------------------------------------------------------------------------------- | -------------- | ---- |
| id           | selectbox ID        | selectbox ID                                                                                  | string         | Y    |
| title        | 제목                | 윗줄 제목 (공간차지 함, 없어도 무방)                                                          | string         | N    |
| variant      | selectox 스타일     | 없음 : default(outlined)<br>standard: 일반형<br>outlined: 외곽border형<br>filled: 일반 색깔형 | string         | N    |
| defaultValue | 선택값              | 선택값                                                                                        | number, string | N    |
| emptyOptObj  | 빈 select option    | {<br>label: 라벨<br> value: value<br>}                                                        | object         | N    |
| items        | selectbox items     | [{<br>label: 라벨<br> value: value<br>}]                                                      | array          | Y    |
| style        | CSS style           | CSS style                                                                                     | CSS object     | N    |
| disabled     | selectbox 활성화    | 없음: default(false)<br>true: 비활성화<br>false: 활성화                                       | boolean        | N    |
| onChange     | 변경 시 이벤트 함수 | parameter: (value: string, number, label(없어도 됨): string, undefined)                       | function       | N    |

#### 2. CSelectWithChip

SelectBox + Chips 컴포넌트 (멀티 선택)

| 프로퍼티     | 설명                | 값                                                                                            | 타입           | 필수 |
| ------------ | ------------------- | --------------------------------------------------------------------------------------------- | -------------- | ---- |
| id           | selectbox ID        | selectbox ID                                                                                  | string         | Y    |
| title        | 제목                | 윗줄 제목 (공간차지 함, 없어도 무방)                                                          | string         | N    |
| variant      | selectox 스타일     | 없음 : default(outlined)<br>standard: 일반형<br>outlined: 외곽border형<br>filled: 일반 색깔형 | string         | N    |
| defaultValue | 선택값              | 선택값                                                                                        | number, string | N    |
| items        | selectbox items     | [{<br>label: 라벨(필수)<br> value: value(필수)<br> <br>image: 이미지}]                        | array          | Y    |
| style        | CSS style           | CSS style                                                                                     | CSS object     | N    |
| disabled     | selectbox 활성화    | 없음: default(false)<br>true: 비활성화<br>false: 활성화                                       | boolean        | N    |
| onChange     | 변경 시 이벤트 함수 | parameter: (value: string, number, label(없어도 됨): string, undefined)                       | function       | N    |

#### 3. CSelectWithImage

SelectBox image option 컴포넌트

| 프로퍼티     | 설명                | 값                                                                                            | 타입           | 필수 |
| ------------ | ------------------- | --------------------------------------------------------------------------------------------- | -------------- | ---- |
| id           | selectbox ID        | selectbox ID                                                                                  | string         | Y    |
| title        | 제목                | 윗줄 제목 (공간차지 함, 없어도 무방)                                                          | string         | N    |
| variant      | selectox 스타일     | 없음 : default(outlined)<br>standard: 일반형<br>outlined: 외곽border형<br>filled: 일반 색깔형 | string         | N    |
| defaultValue | 선택값              | 선택값                                                                                        | number, string | N    |
| emptyOptObj  | 빈 select option    | {<br>label: 라벨<br> value: value<br>}                                                        | object         | N    |
| items        | selectbox items     | [{<br>label: 라벨(필수)<br> value: value(필수)<br> <br>image: 이미지}]                        | array          | Y    |
| style        | CSS style           | CSS style                                                                                     | CSS object     | N    |
| disabled     | selectbox 활성화    | 없음: default(false)<br>true: 비활성화<br>false: 활성화                                       | boolean        | N    |
| onChange     | 변경 시 이벤트 함수 | parameter: (value: string, number, label(없어도 됨): string, undefined)                       | function       | N    |
