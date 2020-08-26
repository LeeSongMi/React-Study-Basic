# 3 STATE
### 3.0 CLASS COMPONENTS AND STATE
- function component: 함수를 수행하는 컴포넌트
- ex)App.js -> function App(){}
- class component
- ex)App.js-> class App extends React.Component{}
- React.Component=> return을 가지지 않음
- render(): 리액트는 자동적으로 render()를 실행함

- 2019년 기준, 클래스형 컴포넌트를 잘 사용하지않고 함수형 컴포넌트 + hooks의 형태로 사용한다고함
### 3.1 ALL YOU NEED TO KNO ABOUT STATE
- state의 값을 this.state.를 이용해 불러올 수 있지만 이렇게 하지는 말자
- 외부의 값에 의존하는 것보다 current=>(current.count)와 같이 내부에서 처리
### 3.2 COMPONENT LIFE CYCLE
- mounting -> constructor() <= render() 보다 우선 실행
- updating
### 3.3 PLANNING THE MOVIE COMPONENT
- JS 삼항연산자 { 조건 ? true식 : false 식}
- componentDidMount: component가 mount되면 가장 먼저 호출됨
