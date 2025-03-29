import React, { useState, useCallback } from 'react';

function App() {
  // Estado para manejar el contador
  const [count, setCount] = useState(0);

  // Función que incrementa el contador
  // Esta función se recrearía en cada renderizado sin useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No tiene dependencias, por lo que solo se crea una vez

  return (
    <div>
      <h1>Contador: {count}</h1>
      {/* Al hacer clic, se llama a la función increment */}
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
