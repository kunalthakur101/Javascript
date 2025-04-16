import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./components/home";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="app-wrapper">
          <Sidebar />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
