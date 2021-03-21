import React, { useState, useEffect, useMemo, useCallback } from 'react'; //useState para usar o Hooks permite que as functions tenham state


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

    //useCallback como se fosse o useMemo, porém retorna uma function
    // e evita que a função seja deletada e criada toda vez que a 
    //pagina é carregada, isso só vai acontecer quando houver necessidade
    const handleAdd = useCallback(() => {
      setTarefas([...tarefas, input]);
      setInput('');
    }, [input, tarefas]);

  //useMemo é usado para que uma ação só seja afeita após a atualização de uma state
  const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);



  return (
    <div>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br/>
      <strong>Você tem {totalTarefas} tarefas!</strong><br/>
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