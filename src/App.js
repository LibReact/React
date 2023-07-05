import './App.css';

function App() {

  const name = 'Bruno';

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h1>Olá {name.toUpperCase()}</h1>
      <p>Soma: {sum(2, 4)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
