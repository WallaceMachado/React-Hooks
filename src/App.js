import React, { useState } from 'react'; //useState para usar o Hooks permite que as functions tenham state


function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);
  const [input, setInput] = useState('');

    // Declarar uma nova variável de state, na qual chamaremos de "contador"
    const [contador, setContador] = useState(0);

  function handleAdd(){
    setTarefas([...tarefas, input])
    setInput('');
  }



  return (
    <div>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>    
      <button type="button" onClick={handleAdd}>Adicionar</button>

      <p>You clicked {contador} times</p>
      <button onClick={() => setContador(contador + 1)}>
          Aumentar
      </button>

    </div>
  );
}

export default App;