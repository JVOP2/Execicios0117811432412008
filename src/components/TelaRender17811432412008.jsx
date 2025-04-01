import CadastroCurso1781432412008 from "./CadastroCurso1781432412008";
import CadastroProfessor1781432412008 from "./CadastroProfessor1781432412008";
import CadastroDisciplina1781432412008 from "./CadastroDisciplina1781432412008";

function TelaRender1781432412008() {
    const telasCadastro=new Map([
        ["professor", CadastroProfessor1781432412008],
        ["disciplina", CadastroDisciplina1781432412008],
        ["curso", CadastroCurso1781432412008],
      ]);
    return (
      <>
      <h1>RENDER</h1>
        </> 
    );
  }
  
  export default TelaRender1781432412008;
  