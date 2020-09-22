# Toggle 컴포넌트

### Toggle 컴포넌트

#### 1. CToggle

toggle 컴포넌트

| 프로퍼티     | 설명           | 값                                                                 | 타입           | 필수 |
| ------------ | -------------- | ------------------------------------------------------------------ | -------------- | ---- |
| id           | toggle id      | toggle id                                                          | string         | Y    |
| items        | toggle items   | [{<br>id: ID(필수)<br>name: name(필수)<br>icon: 아이콘(필수)<br>}] | array          | Y    |
| defaultValue | 디폴트 값      | 디폴트 ID                                                          | string, number | N    |
| size         | 버튼 size      | 없음: default(medium)<br>small: 작음<br>medium: 중간<br>large: 큼  | string         | N    |
| orientation  | 방향           | 없음: default(horizontal)<br>horizontal: 횡<br>vertical: 종        | string         | N    |
| onChange     | 변경 시 이벤트 | return : item                                                      | function       | N    |
