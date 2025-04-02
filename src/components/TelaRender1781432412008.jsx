import CadastrarCurso1781432412008 from "./CadastrarCurso1781432412008";
import CadastrarProfessor1781432412008 from "./CadastrarProfessor1781432412008";
import CadastrarDisciplina1781432412008 from "./CadastrarDisciplina1781432412008";

function TelaRender1781432412008({ tela }) {
  const telasCadastrar = new Map([

    ["professor", CadastrarProfessor1781432412008],
    ["disciplina", CadastrarDisciplina1781432412008],
    ["curso", CadastrarCurso1781432412008],
  ]);
  const renderTela = () => {
    return telasCadastrar.get(tela)()
  }

  return (
    <>
      {renderTela()}
    </>
  );
}

export default TelaRender1781432412008;
