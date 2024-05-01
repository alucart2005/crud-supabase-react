import { useState } from "react";
import "./App.css";
import { AuthContextProvider } from "./index";
import { MyRoutes } from "./routers/routes";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "./index";
export const ThemeContext = createContext(null);

function App() {
  const tema = "dark";
  const [theme, setTheme] = useState(tema);
  const themeStyle = tema === "light" ? Light : Dark;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          <MyRoutes />
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
