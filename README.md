# 202130224 윤상우

---

# React 수업 내용

### 5월 08일 (0508ch3 브랜치)


```


- 컴포넌트 구조
  - FilterableProductTable: 루트 컴포넌트
  - SearchBar: 검색어, 체크박스 입력
  - ProductTable: 상품 목록 출력
  - ProductCategoryRow: 카테고리 헤더
  - ProductRow: 개별 상품 행

- 정적 UI
  - props로 데이터 전달
  - JSX만 사용 (state 없음)
  - 단방향 데이터 흐름 유지

- state로 관리할 항목
  - 검색어
  - 체크박스 상태
  - 원본 데이터
  - 필터링 결과

- state가 아닌 조건
  - 변하지 않음
  - props로 전달됨
  - 계산 가능함

```

### 4월 18일 (9주차 보강)(0403브랜치)
- 과거 이동을 위한 map() 사용
    - history.map()으로 각 게임 상태를 버튼으로 렌더링.
    - 각 버튼은 jumpTo(move)를 호출함.
```
const moves = history.map((squares, move) => {
  const description = move ? `Go to move #${move}` : "Go to game start";
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```
-  key의 중요성

  - map으로 렌더링하는 <li> 요소에는 반드시 key={move} 지정.

  - React는 key를 통해 각 요소를 구분하고 효율적으로 리렌더링함.
```
const [currentMove, setCurrentMove] = useState(0);

function jumpTo(nextMove) {
  setCurrentMove(nextMove);
  setXIsNext(nextMove % 2 === 0);
}
```
랜더링 기준 변경

항상 마지막 상태가 아닌, 선택한 시점의 보드를 렌더링하도록 수정.
```
const currentSquares = history[currentMove];
```

---

### 4월 17일 (7주차)(0403브랜치)
- state 끌어올리기: 클릭한 칸의 index를 Game에서 관리

- handleClick(i):
const nextSquares = squares.slice();
nextSquares[i] = xIsNext ? "X" : "O";
setSquares(nextSquares);

- onSquareClick:
onSquareClick={() => handleClick(i)}

- 턴 관리:
const [xIsNext, setXIsNext] = useState(true);
setXIsNext(!xIsNext);

- 클릭/승자 차단:
if (squares[i] || calculateWinner(squares)) return;

- 상태 메시지:
const status = calculateWinner(squares)
  ? `Winner: ${calculateWinner(squares)}`
  : `Next player: ${xIsNext ? "X" : "O"}`;

- 히스토리 저장:
const [history, setHistory] = useState([Array(9).fill(null)]);

- Game 컴포넌트:
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const current = history[history.length - 1];

  const handleClick = (i) => {
    // 클릭 로직
  };

  return (
    <Board squares={current} onSquareClick={handleClick} />
  );
}
```



---

## 3월 27일(4주차)

### 오늘 배운 내용
-
-
-

---

## 3월 20일(3주차)

### 오늘 배운 내용
React는 컴포넌트 기반 UI 라이브러리로, 각 컴포넌트가 독립적인 기능을 수행하며 이를 조합해 웹 애플리케이션을 구축하는 방식으로 동작한다. React의 컴포넌트는 JavaScript 함수 또는 클래스로 정의되며, 조건부 렌더링과 리스트 렌더링을 활용해 동적인 UI를 구현할 수 있다.

서버 측 데이터 처리와 라우팅을 효율적으로 관리하려면 Next.js나 Remix 같은 Full-stack React Framework를 사용하는 것이 유리하다. 이러한 프레임워크는 SSR(서버 사이드 렌더링) 및 SSG(정적 사이트 생성)를 지원하여 성능을 최적화할 수 있다.

React 프로젝트의 기본 구조는 src/ 폴더 내에 주요 코드가 위치하며, App.js가 메인 컴포넌트 역할을 담당한다. 프로젝트의 의존성 관리는 package.json을 통해 이루어지며, 협업 시 npm install을 실행해 동일한 개발 환경을 유지하는 것이 중요하다.

---

## 🎨 React 수업 프로젝트 - React App

이 프로젝트는 **React 수업**에서 활용하기 위한 실습 프로젝트입니다.  
React의 기본 개념을 익히고, 컴포넌트 기반 UI 개발을 연습하는 데 목적이 있습니다. 🚀

---

## 🛠️ 자주 사용하는 Git Bash 명령어

### 1️⃣ 프로젝트 시작할 때
```sh
git init                                                        # 현재 폴더를 Git 저장소로 초기화
git remote add origin https://github.com/Arund793/react01-1  # GitHub 원격 저장소 추가
```

### 2️⃣ 변경 사항 저장하기
```sh
git status                      # 현재 변경된 파일 확인
git add .                       # 모든 변경된 파일 스테이징
git commit -m "커밋 메시지"      # 변경 사항 커밋
```

### 3️⃣ GitHub에 올리기 & 최신 코드 가져오기
```sh
git push origin main            # GitHub에 코드 업로드
git pull origin main            # GitHub에서 최신 코드 가져오기
```

### 4️⃣ 브랜치 관련
```sh
git branch                     # 현재 브랜치 확인
git branch <브랜치_이름>        # 새 브랜치 생성
git checkout <브랜치_이름>      # 다른 브랜치로 이동
git checkout -b <브랜치_이름>   # 새 브랜치 생성 후 이동
git merge <브랜치_이름>         # 현재 브랜치에 다른 브랜치 병합
git branch -d <브랜치_이름>     # 브랜치 삭제
```

### 5️⃣ 이전 커밋 되돌리기 (Revert & Reset)
```sh
git revert <커밋해시>           # 특정 커밋 되돌리기 (새로운 커밋 생성)
git reset --soft HEAD~1         # 최근 1개 커밋을 취소 (변경 내용 유지)
git reset --hard HEAD~1         # 최근 1개 커밋을 완전히 삭제 (⚠ 되돌릴 수 없음!)
```

### 6️⃣ 특정 파일만 되돌리기
```sh
git checkout -- <파일명>        # 특정 파일 변경사항 되돌리기
git restore <파일명>            # 최신 커밋 상태로 파일 복원
```

### 7️⃣ 작업 내용 임시 저장 (Stash)
```sh
git stash                   # 현재 변경 사항을 임시 저장
git stash pop               # 저장된 변경 사항 다시 적용
git stash list              # 저장된 stash 목록 확인
git stash drop              # 특정 stash 삭제
```

### 8️⃣ 원격 저장소 관련
```sh
git remote -v                                 # 연결된 원격 저장소 확인
git remote set-url origin <새로운_저장소_URL>  # 원격 저장소 변경
git remote remove origin                      # 원격 저장소 삭제
```

### 9️⃣ 강제 푸시 / 강제 풀 (⚠ 조심해서 사용!)
```sh
git push --force              # 강제 푸시 (⚠ 원격 저장소에 강제 적용)
git reset --hard origin/main  # 원격 저장소 기준으로 강제 덮어쓰기 (⚠ 기존 변경 사항 삭제됨)
```

### 🔟 기타 유용한 명령어
```sh
clear                       # 터미널 화면 정리
ls -la                      # 현재 폴더의 모든 파일 보기
cd <폴더명>                 # 폴더 이동
cd ..                       # 상위 폴더로 이동
git log --oneline           # 커밋 로그 한 줄로 보기
```
