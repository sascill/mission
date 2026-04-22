# Mission Dashboard

정적 상품 대시보드를 만들면서 GitHub Issue, 브랜치, PR 단위로 작업을 나누는 연습을 하는 프로젝트입니다.

## 목표

- Vite + React + TypeScript 기반 프로젝트 구성 익히기
- 기능을 작은 단위의 GitHub Issue로 분리하는 연습
- 하나의 이슈를 하나의 브랜치와 하나의 PR로 연결하는 흐름 익히기

## 문서 링크

백로그는 GitHub Wiki에서 관리하고, 작업 규칙은 프로젝트 내부 docs에서 관리합니다.

- 백로그 관리: [GitHub Wiki](https://github.com/sascill/mission/wiki)
- 작업 규칙 관리: [개발 워크플로 문서](./docs/development-workflow.md)

## 작업 규칙

- 기능 작업은 `main` 브랜치에 직접 커밋하지 않는다
- 하나의 이슈는 하나의 브랜치, 하나의 PR로 관리한다
- 브랜치 이름은 `feature/이슈번호-간단한-설명` 형식을 사용한다
- PR 본문에는 구현 내용과 이슈 연결 문구(`Closes #번호`)를 포함한다

## 개발 흐름

1. GitHub Issue 등록
2. 작업 순서 결정
3. feature 브랜치 생성
4. 기능 개발
5. PR 생성
6. 리뷰 후 main 머지
7. feature 브랜치 삭제

## 폴더 구조

```text
mission/
├─ src/
│  ├─ app/
│  ├─ features/
│  └─ pages/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```

## 폴더 역할
- `app`: 앱 진입점과 전역 스타일
- `pages`: 화면 단위 컴포넌트
- `features`: 기능 단위 컴포넌트와 관련 파일
