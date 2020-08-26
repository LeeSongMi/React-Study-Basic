# Movie App
React JS Fundamentals Course 

## 0 INTRODUCTION
#### 0.0 NOTICE
#### 0.1 INTRODUCTION
#### 0.2 THEORY REQUIREMENTS
#### 0.3 WHY REACT

## 1 SETUP
#### 1.0 CREATING YOUR FIRST REACT APP
#### 1.1 CREATING A GITHUB REPOSITORY
#### 1.2 HOW DOES REACT WORK?

## 2 JSX&PROPS
#### 2.0 CREATING YOUR FIRST REACT COMPONENT
- react는 한 번에 하나의  컴포넌트만 읽을 수 있다!

#### 2.1 REUSABLE COMPONENTS WITH JSX + PROPS
- JSK: JS를 확장한 React 문법, JS+XML
- props: 부모 컴포넌트에서 자식 컴포넌트로 전달해주는 데이터

#### 2.2 DYNAMIC COMPONENT GENERATION
- 웹사이트에 동적 데이터를 추가하자
- array.map(arrayObj=>func): 배열의 모든 값에 함수를 적용한 새 배열을 반환
- array.map(func)

#### 2.3 MAP RECAP
- key 값이 없어서 오류가 생성될 시 id를 추가해 키값으로 설정하는 작업 진행
#### 2.4 PROTECTION WITH PROPTYPES
- 들어온 props가 내가 원하는 props인지 확인해보자
- PropTypes: data type을 확인할 수 있다
- npm install prop-types
- 변수명: PropTypes.datatype(ex=string).isRequired
- 이미지 링크의 데이터 타입은 STRING
## 3 STATE
#### 3.0 CLASS COMPONENTS AND STATE
- function component: 함수를 수행하는 컴포넌트
- ex)App.js -> function App(){}
- class component
- ex)App.js-> class App extends React.Component{}
- React.Component=> return을 가지지 않음
- render(): 리액트는 자동적으로 render()를 실행함

- 2019년 기준, 클래스형 컴포넌트를 잘 사용하지않고 함수형 컴포넌트 + hooks의 형태로 사용한다고함

#### 3.1 ALL YOU NEED TO KNO ABOUT STATE
- state의 값을 this.state.를 이용해 불러올 수 있지만 이렇게 하지는 말자
- 외부의 값에 의존하는 것보다 current=>(current.count)와 같이 내부에서 처리

#### 3.2 COMPONENT LIFE CYCLE
- mounting -> constructor() <= render() 보다 우선 실행
- updating

#### 3.3 PLANNING THE MOVIE COMPONENT
- JS 삼항연산자 { 조건 ? true식 : false 식}
- componentDidMount: component가 mount되면 가장 먼저 호출됨

## 4 MAKING THE MOVIE APP
#### 4.0 FETCHING MOVIES FROM API
- Axios: HTTP통신을 위한 JS라이브러리 get/post 요청이 있음
- axios({
-   url: 'https://test/api/cafe/list/today',
-   method: 'get',
-   data: {
-     foo: 'diary'
-   }
- });

- async: await.뒤의 과정을 기다려라
#### 4.1 RENDERING THE MOVIES
- Movie.js 파일 생성 및 영화 제목 렌더링
- 랜더링 할시 특정 데이터를 찾으려면 console로 찍은 obj의 정확한 이름으로 찾아야함

#### 4.2 STYLING THE MOVIES
- css를 이용하여 스타일링 가능

#### 4.3 ADDING GENRES
- 장르 추가
- map()에서 index번호를 받을 수 있다 (ex: map((Obj, index) => (func)))
- 클래스형 컴포넌트 사용시 class가 오류를 발생시킴 => classNAme으로 변경하여 사용
#### 4.4 STYLES TIMELAPSE
#### 4.5 CUTTING THE SUMMARY

## 5 CONCLUSIONS
#### 5.0 DEPLOYING TO GITHUB PAGES
#### 5.1 ARE WE DONE?

## 6 ROUTING BONUS