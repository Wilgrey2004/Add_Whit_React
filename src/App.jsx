import "./App.css";
import Footer from "./components/navigation/Footer";
import Menu from "./components/navigation/Menu";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Menu />
      <div className="min-h-screen pt-4 pb-8 px-4">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
