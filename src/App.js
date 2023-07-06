import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  const [nome1, setNome] = useState();
  
  const meusItens = ['React', 'Vue', 'Angular'];

  const nome = "Lima";

  return (
    <div className="App">
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome1} />
      <OutraLista  itens={meusItens}/>
      <OutraLista  itens={[]}/>
      <Condicional />
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
