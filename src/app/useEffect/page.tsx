"use client";

import { useEffect } from 'react';

export default function ExampleUseEffect() {

    
  // Cambia el título de la pestaña al montar
  useEffect(() => {
    document.title = 'Ejemplo de useEffect 🧠';

    return () => {
      document.title = 'Mi App de React';
    };
  }, []);


  // Escucha el cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      console.log('Tamaño de ventana:', window.innerWidth, 'x', window.innerHeight, 'y');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Listener de resize eliminado');
    };
  }, []);

  return (
    <div>
      <h1>Ejemplo combinado de useEffect</h1>
      <p>Esta página cambia el título de la pestaña del navegador al cargar.</p>
      <p>Además, escucha cuando cambias el tamaño de la ventana (revisa la consola).</p>
    </div>
  );
}
