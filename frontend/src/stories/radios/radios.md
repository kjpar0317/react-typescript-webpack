# 라디오 컴포넌트

### 라디오 그룹 컴포넌트

#### 1. CRadioGroup

라디오 그룹 컴포넌트

| 프로퍼티       | 설명                 | 값                                                                                                                            | 타입     | 필수 |
| -------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------- | ---- |
| id             | 라디오 그룹 ID       | 라디오 그룹 ID                                                                                                                | string   | Y    |
| type           | 라디오 그룹 색깔     | 없음: default (cradio1)<br> cradio1: 파랑<br>cradio2: 녹색 <br> cradio3: 주황 <br> cradio4: 빨강                              | string   | N    |
| title          | 라디오 제목          | 라디오 윗줄 제목 (공간차지 함, 없어도 무방)                                                                                   | string   | N    |
| defaultValue   | 선택값               | 선택값                                                                                                                        | string   | N    |
| items          | 라디오 items         | [{<br>label: 라벨(필수)<br> value: value(필수)<br> disabled: disabled(default: false)<br> checked: 체크(default: false)<br>}] | array    | Y    |
| row            | 체크박스 방향        | 없음: default(false)<br>true: 횡 방향<br>false: 종 방향                                                                       | boolean  | N    |
| labelPlacement | 라벨 방향            | 없음 : default(end) <br>bottom: 밑<br>end: 뒤<br>start: 앞 <br>top : 위                                                       | string   | N    |
| fullWidth      | 라디오그룹 너비 영역 | 없음: default(true)<br>true: 전체, false: 일부                                                                                | boolean  | N    |
| disabled       | 라디오그룹 활성화    | 없음: default(false)<br>true: 비활성화<br>false: 활성화                                                                       | boolean  | N    |
| onChange       | 변경 시 이벤트 함수  | parameter: (value: string, label(없어도 됨): string, undefined)                                                               | function | N    |
