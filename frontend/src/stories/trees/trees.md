# Tree 컴포넌트

### Tree 컴포넌트

#### 1. CTree

Tree 컴포넌트

| 프로퍼티 | 설명           | 값                                                                                                                                             | 타입     | 필수 |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---- |
| items    | tree items     | [{<br>id: ID(필수)<br>name: name(필수)<br>isDirectory: 폴더인지 여부<br>expanded: 확장 여부<br>children: array (자식들<프로퍼티는 반복>)<br>}] | array    | Y    |
| canEdit  | 수정가능여부   | [{<br>undefined: default(false)<br>true: 수정가능<br>false: 수정불가                                                                           | boolean  | N    |
| onClick  | 클릭 시 이벤트 | return : 현재 노드                                                                                                                             | function | N    |
| onChange | 변경 시 이벤트 | return : (mode: 추가, 이동, 삭제 flag, info: 현재 노드 또는 부모 노드)                                                                         | function | N    |

#### 2. CFileTree

파일 Tree 컴포넌트

| 프로퍼티 | 설명           | 값                                                                                                                                             | 타입     | 필수 |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---- |
| items    | tree items     | [{<br>id: ID(필수)<br>name: name(필수)<br>isDirectory: 폴더인지 여부<br>expanded: 확장 여부<br>children: array (자식들<프로퍼티는 반복>)<br>}] | array    | Y    |
| canEdit  | 수정가능여부   | [{<br>undefined: default(false)<br>true: 수정가능<br>false: 수정불가                                                                           | boolean  | N    |
| onClick  | 클릭 시 이벤트 | return : 현재 노드                                                                                                                             | function | N    |
| onChange | 변경 시 이벤트 | return : (mode: 추가, 이동, 삭제 flag, info: 현재 노드 또는 부모 노드)                                                                         | function | N    |

#### 3. CStyleTree

Material Style Tree 컴포넌트

| 프로퍼티 | 설명           | 값                                                                                                                                                                              | 타입     | 필수 |
| -------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---- |
| items    | tree items     | [{<br>id: ID<br> name: 라벨<br>labelIcon: 라벨 아이콘<br>labelInfo: 오른쪽 sub text<br>color: 폰트 색상<br>bgColor: 배경 색깔<br>children: array(자식들<프로퍼티는 반복>)<br>}] | array    | Y    |
| onClick  | 클릭 시 이벤트 | return : 현재 노드                                                                                                                                                              | function | N    |
