# Stepper 컴포넌트

### Stepper 컴포넌트

#### 1. CStepper

Stepper 컴포넌트

| 프로퍼티    | 설명          | 값                                                                                                         | 타입   | 필수 |
| ----------- | ------------- | ---------------------------------------------------------------------------------------------------------- | ------ | ---- |
| type        | stepper 색깔  | 없음: default (cstepper1)<br> cstepper1: 파랑<br>cstepper2: 녹색 <br> cstepper3: 주황 <br> cstepper4: 빨강 | string | N    |
| items       | stepper items | ['label: 라벨'...]                                                                                         | array  | Y    |
| defaultStep | default step  | default step (default: 0)                                                                                  | number | N    |
| orientation | 방향          | 없음 : default(horizontal), horizontal: 횡, vertical: 종                                                   | string | N    |
