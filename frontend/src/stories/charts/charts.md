# Chart 컴포넌트

### AreaChart 컴포넌트

#### 1. SyncronizedAreaChart

동기화 가능 Area 차트

| 프로퍼티        | 설명              | 값                                                                     | 타입           | 필수 |
| --------------- | ----------------- | ---------------------------------------------------------------------- | -------------- | ---- |
| syncId          | 동가화 ID         | 여러차트 있을 시 동기화 ID, 단독일 경우 unique한 ID를 쓰거나 안 넣는다 | string         | N    |
| data            | 차트 데이터       | 차트 데이터                                                            | array          | Y    |
| xPvt            | X축               | 차트 데이터 중 X축 선언                                                | string         | Y    |
| YPvts           | Y축들             | 차트 데이터 중 Y축(여러개 선언 가능)들 선언                            | array          | Y    |
| height          | 차트 높이         | 차트 높이(영역)                                                        | number, string | N    |
| strokeDasharray | 차트 안 눈금 밀도 | ofsdf                                                                  | string         | N    |
| storkColors     | 차트 테두리 색깔  | HTML Color 예 ) #ffffff, white                                         | array          | N    |
| fillColors      | 차트 색깔         | HTML Color 예 ) #ffffff, white                                         | array          | N    |
| xRange          | X축 범위          | 범위                                                                   | array          | N    |
| yRange          | Y축 범위          | 범위                                                                   | array          | N    |
