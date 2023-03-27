import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components/general";
import Main from "./components/homepage/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
