# 0 INTRODUCTION
### 0.0 NOTICE
### 0.1 INTRODUCTION
### 0.2 THEORY REQUIREMENTS
### 0.3 WHY REACT

# 1 SETUP
### 1.0 CREATING YOUR FIRST REACT APP
- npx create-react-app 폴더명
- 대문자는 사용 불가능함
### 1.1 CREATING A GITHUB REPOSITORY
### 1.2 HOW DOES REACT WORK?

# 2 JSX&PROPS
### 2.0 CREATING YOUR FIRST REACT COMPONENT
- react는 한 번에 하나의  컴포넌트만 읽을 수 있다!

### 2.1 REUSABLE COMPONENTS WITH JSX + PROPS
- JSK: JS를 확장한 React 문법, JS+XML
- props: 부모 컴포넌트에서 자식 컴포넌트로 전달해주는 데이터

### 2.2 DYNAMIC COMPONENT GENERATION
- 웹사이트에 동적 데이터를 추가하자
- array.map(arrayObj=>func): 배열의 모든 값에 함수를 적용한 새 배열을 반환
- array.map(func)

### 2.3 MAP RECAP
- key 값이 없어서 오류가 생성될 시 id를 추가해 키값으로 설정하는 작업 진행
### 2.4 PROTECTION WITH PROPTYPES
- 들어온 props가 내가 원하는 props인지 확인해보자
- PropTypes: data type을 확인할 수 있다
- npm install prop-types
- 변수명: PropTypes.datatype(ex=string).isRequired
- 이미지 링크의 데이터 타입은 STRING