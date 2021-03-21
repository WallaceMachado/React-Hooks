import React, { useState, useEffect } from 'react'; //useState para usar o Hooks permite que as functions tenham state


function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);
  const [input, setInput] = useState('');

    // Declarar uma nova variável de state, na qual chamaremos de "contador"
    const [contador, setContador] = useState(0);

    //equivale ao component DidMount, é o primeiro a ser executado quando o propgrama é carregado
    useEffect(()=>{
      const tarefasStorage = localStorage.getItem('tarefas');
      // passa para a state tarefas o que está no localStorage
      if(tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage));
      }
  
    }, []);
  
  //equivale é o Component DidUpdate, é executado quando ten alteração no array [tarefas]
    useEffect(()=> {
      //salva as alterações feitas no Array [tarefas] no localStorage
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

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