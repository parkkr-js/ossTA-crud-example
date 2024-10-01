# CRUD Example using Mockapi

이 프로젝트는 한동대학교 2024년도 2학기 오픈소스 스튜디오 참고를 위한 자료입니다. <br/>
[demo site link](https://oss-crud-example.vercel.app/)

## 프로젝트 개요

이 프로젝트는 Mockapi, React, Ant Design, 그리고 Axios를 사용하여 CRUD(Create, Read, Update, Delete) 기능을 구현한 웹 애플리케이션입니다.

## 사용된 기술 스택 및 버전

- **React**: ^18.3.1
- **Ant Design (antd)**: ^5.21.2
- **Axios**: ^1.7.7
- **Emotion (styled & react)**: ^11.13.0, ^11.13.3
- **React Scripts**: 5.0.1
- **Testing Libraries**: @testing-library/jest-dom, @testing-library/react, @testing-library/user-event

## 프로젝트 실행 절차

### 1. 의존성 설치

프로젝트를 클론한 후, 프로젝트 디렉토리에서 의존성을 설치합니다.

```bash
npm install
```

### 2. 개발 서버 실행

의존성 설치가 완료되면, 아래 명령어를 사용해 개발 서버를 실행할 수 있습니다.

```bash
npm start
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다. 코드를 수정할 경우 페이지가 자동으로 리로드됩니다.

### 3. 프로덕션 빌드

프로덕션 환경을 위한 빌드를 생성하려면 다음 명령어를 사용하시면 됩니다.

```bash
npm run build
```

### 4. 테스트 실행

테스트를 실행하려면 아래 명령어를 사용하십시오.

```bash
npm test
```

테스트는 인터랙티브 모드에서 실행됩니다.

### 5. 빌드 구성 변경 (Optional)

프로젝트의 설정을 수정하려면 `eject` 명령어를 사용할 수 있습니다. 이 명령어는 빌드 설정 파일들을 프로젝트에 복사하며, 복사된 파일들은 직접 수정 가능합니다.

```bash
npm run eject
```

**주의:** 이 작업은 되돌릴 수 없습니다.

## 버전 관리

이 프로젝트에서는 아래와 같은 주요 라이브러리 및 도구의 버전이 사용되었습니다:

- **React**: ^18.3.1
- **React DOM**: ^18.3.1
- **React Scripts**: 5.0.1
- **Ant Design (antd)**: ^5.21.2
- **Axios**: ^1.7.7
- **Emotion (react, styled)**: ^11.13.0, ^11.13.3

## 기타

- 이 프로젝트는 오픈소스 스튜디오 실습용으로 제작되었습니다.
- 코드 스타일은 최신 React 표준을 따르고 있으며, 주요 기능은 Mockapi를 사용한 CRUD 기능을 중심으로 구성되었습니다.

## 추가 정보

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)을 기반으로 하고 있으며, 자세한 내용은 [공식 문서](https://facebook.github.io/create-react-app/docs/getting-started)에서 확인할 수 있습니다.
