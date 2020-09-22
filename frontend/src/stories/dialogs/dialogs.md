# Dialog 컴포넌트

### Dialog 컴포넌트

#### 1. CDialog

칩 컴포넌트

| 프로퍼티  | 설명                      | 값                                                                                                          | 타입     | 필수 |
| --------- | ------------------------- | ----------------------------------------------------------------------------------------------------------- | -------- | ---- |
| id        | 다이얼로그 ID             | 다이얼로그 ID                                                                                               | string   | Y    |
| title     | 다이얼로그 제목           | 다이얼로그 제목                                                                                             | string   | N    |
| modules   | 버튼 모듈들               | create: 추가 버튼, update: 수정 버튼, delete: 삭제 버튼, close: 닫기 버튼                                   | array    | N    |
| validated | 버튼 활성상태             | default: true<br>true: 활성화<br>false: 비활성화<br>활성상태는 추가, 수정, 삭제에만 해당                    | array    | N    |
| variant   | 버튼 스타일               | 없음: default (contained)<br>contained: 색깔 채워진 스타일 <br> outlined: 버튼 안 색깔 비워짐               | string   | N    |
| open      | 다이얼로그 열림           | default: false<br> true: 열림<br> false: 닫힘                                                               | boolean  | N    |
| fullWidth | 다이얼로그 안쪽 너비 차지 | default: true<br> true: 전체 차지<br>false: 부분 차지                                                       | boolean  | N    |
| maxWidth  | 다이얼로그 너비           | default: sm<br>lg: 큰 너비<br> md: 중간 너비<br> sm: 작은 너비<br> xl: 더 작은 너비<br> xs: 더 더 작은 너비 | string   | N    |
| onCreate  | 추가 버튼 클릭 시 이벤트  | return: 없음                                                                                                | function | N    |
| onUpdate  | 수정 버튼 클릭 시 이벤트  | return: 없음                                                                                                | function | N    |
| onDelete  | 삭제 버튼 클릭 시 이벤트  | return: 없음                                                                                                | function | N    |
| onClose   | 닫기 버튼 클릭 시 이벤트  | return: 없음                                                                                                | function | N    |
