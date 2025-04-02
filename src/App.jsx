import "./App.css";
import Container1781432412008 from "./components/Container1781432412008";
import Menu1781432412008 from "./components/Menu1781432412008";
import TelaRender1781432412008 from "./components/Container1781432412008";
import { useState } from "react";

function App() {
  const [atual, setAtual] = useState("professor");
  const setTela = (tela) => {
    setAtual(tela)
    console.log(atual)
  }
  return (
    <Container1781432412008>
      <Container1781432412008>
        <Menu1781432412008 setTela={setTela} />
      </Container1781432412008>
      <Container1781432412008>
        <TelaRender1781432412008 tela={atual} />
      </Container1781432412008>
    </Container1781432412008>
  );
}
//🔑fechando🔑
export default App; 
