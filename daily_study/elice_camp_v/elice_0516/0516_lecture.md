### React 세팅하기
- npm create-react-app 폴더명 --template typescript

### 클로저, 스코프 개념
- 클로저 :
- 스코프 :

### MUI깔기 / 컨텍스트 API
- npm install @mui/material @emotion/react @emotion/styled
- import { Container, Grid, ThemeProvider, createTheme } from "@mui/material";
  - Container 가운데 정렬
  - Grid 옆으로 정렬
    - Grid item xs={12} sm={6}
    - Grid container spacing={2}
- palette
  - ButtonGroup style={{marginLeft: 10}} color="primary"
- Theming
  - createTheme
    - palette: { primary: grey }
  - import { grey } from "@mui/material/colors";
  - ThemeProvider theme={테마 이름} 태그로 감싸기
  - CSS는 구체적으로, 가까울수록 이긴다.

### Context API
- createContext
- import React, { createContext } from "react";
- theme.Provider -> MyThemeProvider value={{}}
- MyThemeProvider에 적용시켜놓은 테마를 상속, 적용하기 위해서 사용
- 나만의 공유 테마, 남의 만든 라이브러리를 내 취향에 맞게 변경해서 쓰는 느낌

### 정의 피킹

### Button
- ButtonGroup
- Button variant="contained" onClick={startCount}