"use client";

import { useState } from "react";

//* Ejemplo 1: Lista de tareas (Array)
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos); //*tareas
  const [text, setText] = useState(""); //* input del usuario 

  function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < 50; i++) {
      initialTodos.push({
        id: i,
        text: "Item " + (i + 1),
      });
    }
    return initialTodos;
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Agregar tarea
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

//* Ejemplo 2: Asignar un objeto al useState(Object)
function Form() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  return (
    <div>
      <label>
        Nombre:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              /**
               * ! No funciona:
               form.firstName = e.target.value

               * * Pero sí:
              */

              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Apellido:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Correo electrónico:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
    </div>
  );
}

//* Ejemplo 3: Reiniciar formulario (Usando "key" para reiniciar estado)
function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1); //* Cambia la versión para reiniciar el formulario
  }

  return (
    <div>
      <button onClick={handleReset}>Reiniciar formulario</button>
      <Form key={version} /> {/*A partir del atributo "key" podemos comandar re-renders */}
    </div>
  );
}

//* Ejemplo 4: Seguimiento de cambios entre renderizados
function CountLabel( {count} : { count : number}) {
  const [currentCount, setCurrentCount] = useState(count);
  const [prevCount, setPrevCount] = useState(count);
    //* Podemos asignarle tipo a un estado con <>
  const [trend, setTrend] = useState<string | null>(null);

  if (prevCount !== currentCount) {
    setTrend(currentCount > prevCount ? 'increasing' : 'decreasing');
    setPrevCount(currentCount);
  }

  return (
    <div>
      <h1>{currentCount}</h1>
      {trend && <p>The count is {trend}</p>}
      <button onClick={() => setCurrentCount(currentCount + 1)}>Incrementar</button>
      <button onClick={() => setCurrentCount(currentCount - 1)}>Decrementar</button>
    </div>
  );
}

export default function ExampleUseState() {
  return (
    <main>
      <div>
        <h1>Ejemplo de useState</h1>

        <h2>Ejemplo 1: Todo List (Array)</h2>
        <TodoList />
        <br /><br />
        <h2>Ejemplo 2: Form (Object)</h2>
        <Form /> 
        <br /><br />
        <h2>Ejemplo 3: Form Reset</h2>
        <App />
        <br /><br />
        <h2>Ejemplo 4: Tracking Changes Between Renders</h2>
        <CountLabel count={5} />
      </div>
    </main>
  );
}
