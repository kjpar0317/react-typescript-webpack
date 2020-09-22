# Switch 컴포넌트

### Switch 컴포넌트

#### 1. CSwitch

Switch 단일 컴포넌트

| 프로퍼티       | 설명                | 값                                                                                                    | 타입     | 필수 |
| -------------- | ------------------- | ----------------------------------------------------------------------------------------------------- | -------- | ---- |
| label          | 라벨                | 라벨                                                                                                  | string   | Y    |
| id             | ID                  | ID(단일은 없어도 됨)                                                                                  | string   | N    |
| type           | switch 색깔         | 없음: default (cswitch1)<br> cswitch1: 파랑<br>cswitch2: 녹색 <br> cswitch3: 주황 <br> cswitch4: 빨강 | string   | N    |
| labelPlacement | 라벨 방향           | 없음 : default(end) <br>bottom: 밑<br>end: 뒤<br>start: 앞 <br>top : 위                               | string   | N    |
| checked        | switch 체크여부     | 없음: default(false)<br>true: 체크<br>false: 비체크                                                   | boolean  | N    |
| disabled       | switch 활성화       | 없음: default(false)<br>true: 비활성화<br>false: 활성화                                               | boolean  | N    |
| onChange       | 변경 시 이벤트 함수 | return: (checked: boolean, target(없어도 됨): event.target)                                           | function | N    |

#### 2. CSwitchGroup

Switch 멀티 컴포넌트

| 프로퍼티       | 설명                | 값                                                                                                                                                             | 타입     | 필수 |
| -------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---- |
| title          | 제목                | switch 상단 타이틀 (없어도 됨, 공간 차지)                                                                                                                      | string   | N    |
| items          | switch items        | [{<br>label: 라벨(필수)<br>id: ID(필수)<br>type: 색깔(위에 단일 컴포넌트 참조)<br>checked: 체크여부(default: false)<br>disabled: 비활성(default : false)<br>}] | string   | N    |
| labelPlacement | 라벨 방향           | 없음 : default(end) <br>bottom: 밑<br>end: 뒤<br>start: 앞 <br>top : 위                                                                                        | string   | N    |
| helperText     | switch 하단 도움말  | switch 하단 도움말(없어도 됨, 공간 차지)                                                                                                                       | string   | N    |
| row            | switch 방향         | 없음: default(false)<br>true: 횡 방향<br>false: 종 방향                                                                                                        | boolean  | N    |
| onChange       | 변경 시 이벤트 함수 | return: item row                                                                                                                                               | function | N    |
