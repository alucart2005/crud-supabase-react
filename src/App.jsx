import "./App.css";
import { AuthContextProvider } from "./context/AuthCOntext";
import { MyRoutes } from "./routers/routes";

function App() {
  return (
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>
  );
}

export default App;
