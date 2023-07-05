import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const nome = "Lima";

  return (
    <div className="App">
      <Form />
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Frase />
      <h1>Testando css</h1>
      <SayMyName nome={nome} />
      <Pessoa nome="Antonio" idade="30" profissao="Programador" foto="https://via.placeholder.com/150" />
      <List />
    </div>
  );
}

export default App;
