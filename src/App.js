import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Lima";

  return (
    <div className="App">
      <SayMyName nome="Bruno" />
      <SayMyName nome="Jose" />
      <SayMyName nome={nome} />
      <Pessoa nome="Antonio" idade="30" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
