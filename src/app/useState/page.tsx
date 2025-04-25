"use client";

import React, { useState } from 'react';


// Example 1: Form (Object)
function Form() {
  const [form, setForm] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  return (
    <div>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
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
        Email:
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

// Example 2: Todo List (Array)
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);

  const [text, setText] = useState('');

  function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < 50; i++) {
      initialTodos.push({
        id: i,
        text: 'Item ' + (i + 1),
      });
    }
    return initialTodos;
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

// Example 3: Form Reset (Using Key to Reset State)
function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1); // Change version to reset form
  }

  return (
    <div>
      <button onClick={handleReset}>Reset Form</button>
      <Form key={version} />
    </div>
  );
}

// Example 4: Tracking Changes Between Renders
function CountLabel( {count } : { count : number} ) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState<string | null>(null);

  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }

  return (
    <div>
      <h1>{count}</h1>
      {trend && <p>The count is {trend}</p>}
    </div>
  );
}

export default function ExampleUseState() {
  return (
    <main>
    <div>
    <h1>Ejemplo de useState</h1>
      
      <h2>Example 1: Form (Object)</h2>
      <Form />
      <h2>Example 2: Todo List (Array)</h2>
      <TodoList />
      <h2>Example 3: Form Reset</h2>
      <App />
      <h2>Example 4: Tracking Changes Between Renders</h2>
      <CountLabel count={5} />
    </div>
    </main>
  );
}
