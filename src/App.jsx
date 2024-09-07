import { useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main />
      <SideBar>adfajlkdj</SideBar>
      <Footer />
    </>
  );
}

export default App;
