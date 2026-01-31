import "./App.css";
import Footer from "./components/navigation/Footer";
import Menu from "./components/navigation/Menu";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Menu />

      <div className="primary-layout-display bg-color-primary">
        <AppRoutes />
      </div>

      <Footer />
    </>
  );
}

export default App;
