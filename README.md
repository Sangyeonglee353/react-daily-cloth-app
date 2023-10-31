# 프로젝트 목적

- 스티브 잡스처럼 매일 같은 옷을 입을 수 있다면, 얼마나 편하고 좋을까? 라는 고민에 시작한 프로젝트이다. 현실적으로 스티브 잡스처럼 매일 같은 옷을 입을 수는 없다. 따라서, 매일 어떤 옷을 입을 지 고민하는 시간을 줄이고자, 해당 사이트를 만들게 되었다.

# 프로젝트 기능

### 기본적인 정보 제공

- 오늘의 날씨
- 날씨에 맞는 (1) 옷 유형 (2) 컬러 (3) 스타일 추천

#### 세부기능

1.  날씨 표시

- 지역 선택(Kakao map 연결 & 위도 경도 정보 가져오기)
- 날씨 가져오기(위도, 경도와 날씨 API의 위도, 경도값 매칭)
- 날씨 표시하기

2.  날씨별 추천 시스템

- 색상
- 옷 유형

3. 옷장 매칭 시스템

- 옷장에 있는 옷과 위 추천 내용과 일치하는 내용 출력

### 저장 기능

- 내가 가지고 있는 옷 저장
- daily로 입은 옷 저장

### 패션 게시판

- 패션에 무지한 개발자를 위해 패션과 관련한 Article을 긁어와 보여주는 게시판

# 기술스택

- react.js
- tailwind: CSS
- FileAPI: excel 파일 읽기
- sheetjs: excel 파일 변환(위도, 경도 정보)
- 기상청 OpenAPI: 날씨 정보

# 향후 계획

- react 기반으로 프로토타입 완성
- next.js 학습 후 마이그레이션 진행
