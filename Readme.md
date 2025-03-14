## Node.js의 활용
- 웹 서버    
-> REST API, GraphQL API 개발  
- 실시간 애플리케이션  
->채팅, 실시간 알림, 스트리밍   
- 서버리스 환경   
->AWS Lambda 같은 Faas(Function as a Service)

## Node.js 인기 이유
- 빠른 성능 : V8 엔진 기반 + 비동기 논 블로킹 방식으로 고성능 처리 가능   
- JavaScript 풀스택 개발 : 프론트엔드와 백엔드를 같은 언어(JavaScript) 로 개발 가능   
- 활발한 생태계 : npm을 통해 다양한 패키지 사용이 가능   
- 실시간 애플리케이션에 강함 : WebSocket, Socket.io 지원
- 마이크로 서비스 및 서버리스 환경과의 조화로운 연동

## Node.js 는 앞으로도 계속 발전할까?
- Node.js의 창시자가 만든 Deno가 경쟁자로 떠오르고 있지만, Node.js의 생태계가 훨씬 크고 안정적임
- ES 모듈로의 전환 진행 중
- AWS, Azure, GCP에서 Node.js 지원 강화

## Node.js 의 장단점   
### 장점
- 비동기 논 블로킹 I/O로 높은 성능 제공   
- JavaScript 풀스택 개발이 가능하여 생산성이 향상됨   
- npm의 방대한 생태계를 활용 가능   
- 경량 서버 개발에 적합 (Express.js 등)   
- 실시간 데이터 처리(WebSocket)가 강력함
### 단점
- CPU 집약적인 작업에 부적합   
> 싱글 스레드 기반이라 멀티스레딩 성능이 부족   
- 콜백 지옥(Callback Hell) 문제
> 해결책으로 async/await과 Promise 사용
- 보안 취약점
> npm 패키지의 보안 문제가 자주 발생