import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Lima";

  return (
    <div className="App">
      <Frase />
      <h1>Testando css</h1>
      <SayMyName nome={nome} />
      <Pessoa nome="Antonio" idade="30" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
