# 202130224 윤상우

---

# React 수업 내용

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