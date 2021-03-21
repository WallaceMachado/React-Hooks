import React, {useState} from 'react'; //useState para usar o Hooks permite que as functions tenham state


function App() {
  const [tarefas,setTarefas]= useState(["pagar conta de luz",'Estudar React Hooks']); 
  return (
    <div className="App">
      <h1>Hooks</h1>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
     
    </div>
  );
}

export default App;
