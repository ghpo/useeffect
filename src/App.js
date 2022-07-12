import { useState, useEffect } from "react";
import SpecialComponent from "./SpecialComponent";

function App() {

  const [counter, setCounter] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    document.title = 'React Hooks | useEffect';
  }, []);

  useEffect(() => {
   // alert('Valor do Counter: ' + counter );
  },[counter]);

  function increaseCounter() {
    setCounter(counter+1);
  }

  function handleComponentVisibility() {
    setShowComponent(!showComponent);
  }

  return (
    <div className="App">

    <h2>{counter}</h2>
      <button onClick={increaseCounter}>Aumentar contador</button>
<br/>
      <button onClick={handleComponentVisibility}>{showComponent ? 'Esconder Componente' : 'Exibir Componente Especial'}</button>
<br/>
{showComponent && <SpecialComponent />}
    
    </div>
  );
}

export default App;
