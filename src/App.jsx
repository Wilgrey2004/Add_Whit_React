import "./App.css";
import Menu from "./components/navigation/Menu";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Menu />
      <AppRoutes />
    </>
  );
}

export default App;
