# Progress 컴포넌트

### 라인 Progress 컴포넌트

#### 1. CBorderLinear

라인 프로그레스 컴포넌트

| 프로퍼티     | 설명                            | 값                                                                                                                          | 타입   | 필수 |
| ------------ | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------ | ---- |
| type         | 버튼 색깔                       | 없음: default (cprogress1)<br> cprogress1: 파랑<br>cprogress2: 녹색 <br> cprogress3: 주황 <br> cprogress4: 빨강             | string | N    |
| value        | 진행률                          | 진행률                                                                                                                      | number | Y    |
| valueBuffer  | 진행률 버퍼                     | variant가 buffer일때 버퍼 진행률                                                                                            | number | N    |
| variant      | 진행률 스타일                   | 없음: default (determined)<br>buffer: 버퍼 <br> determinate: 고정 진행<br> indeterminate: 동적 진행<br> query: 동적 역 진행 | string | N    |
| borderRadius | 진행 border 반지름 (default: 5) | 진행 border 반지름                                                                                                          | number | N    |
| height       | 진행률 높이                     | 진행률 높이 (default: 10)                                                                                                   | number | N    |

### 원 Progress 컴포넌트

#### 1. CCircularWithLabel

원 프로그레스 컴포넌트 (라벨 추가)

| 프로퍼티  | 설명          | 값                                                                                                                          | 타입   | 필수 |
| --------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------ | ---- |
| type      | 버튼 색깔     | 없음: default (cprogress1)<br> cprogress1: 파랑<br>cprogress2: 녹색 <br> cprogress3: 주황 <br> cprogress4: 빨강             | string | N    |
| value     | 진행률        | 진행률                                                                                                                      | number | Y    |
| size      | 원 사이즈     | 원 사이즈 (default : 40)                                                                                                    | number | N    |
| thickness | 원 굻기       | 원 굻기 (default : 3.6)                                                                                                     | number | N    |
| variant   | 진행률 스타일 | 없음: default (determined)<br>buffer: 버퍼 <br> determinate: 고정 진행<br> indeterminate: 동적 진행<br> query: 동적 역 진행 | string | N    |
