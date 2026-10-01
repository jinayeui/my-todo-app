# Todo List

React로 제작한 투두리스트입니다.
라이트·다크 모드를 지원합니다.

## Tech Stack

- **Library**: React
- **Build**: Vite
- **Language**: JavaScript (JSX)
- **Styling**: styled-components (CSS-in-JS)
- **State**: useState + useRef
- **Icons**: react-icons

## Features

- **할 일 추가**: Enter 키 또는 ADD 버튼으로 추가, 공백만 입력하면 입력창에 포커스 (한글 입력 중 Enter 중복 입력 방지)
- **완료 체크·삭제**: 체크박스로 완료 여부를 토글하고, 완료한 항목은 취소선 표시 및 'Completed'로 이동
- **필터**: All / Active / Completed
- **다크 모드**: `ThemeProvider`로 모드 값을 전달해 컴포넌트별로 색상 전환

## Styling Migration: CSS Module → styled-components

처음에는 `App.module.css` 하나에 전체 스타일을 작성했으나, styled-components로 마이그레이션했습니다.

- **컴포넌트 단위 스타일**: 하나의 CSS 파일에 모여 있던 스타일을 각 컴포넌트 파일로 옮기고, 기존 클래스명을 기준으로 styled 컴포넌트 이름을 정함
- **다크 모드 처리 방식 변경**: `.dark` 클래스 선택자 대신 `ThemeProvider`의 `theme.darkMode` 값으로 조건부 스타일 적용

## Project Structure

```
├─ public/           # 정적 파일 (favicon)
└─ src/
   ├─ components/    # UI 컴포넌트 (Header, Filter, List, Editor)
   ├─ App.jsx        # 투두 상태 관리, 필터링, 다크 모드 테마 제공
   ├─ index.css      # 전역 리셋, 폰트, CSS 변수
   └─ main.jsx       # 앱 진입점
```
