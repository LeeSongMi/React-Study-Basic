# 4 MAKING THE MOVIE APP
### 4.0 FETCHING MOVIES FROM API
- Axios: HTTP통신을 위한 JS라이브러리 get/post 요청이 있음
- axios({
-   url: 'https://test/api/cafe/list/today',
-   method: 'get',
-   data: {
-     foo: 'diary'
-   }
- });

- async: await.뒤의 과정을 기다려라
### 4.1 RENDERING THE MOVIES
- Movie.js 파일 생성 및 영화 제목 렌더링
- 랜더링 할시 특정 데이터를 찾으려면 console로 찍은 obj의 정확한 이름으로 찾아야함

### 4.2 STYLING THE MOVIES
- css를 이용하여 스타일링 가능

### 4.3 ADDING GENRES
- 장르 추가
- map()에서 index번호를 받을 수 있다 (ex: map((Obj, index) => (func)))
- 클래스형 컴포넌트 사용시 class가 오류를 발생시킴 => classNAme으로 변경하여 사용
### 4.4 STYLES TIMELAPSE
### 4.5 CUTTING THE SUMMARY

