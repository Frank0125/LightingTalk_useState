'use client';
import { useEffect, useState } from 'react';


interface Coffee {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
}

export default function CoffeeTableWithFilter() {
  const [allCoffeeData, setAllCoffeeData] = useState<Coffee[]>([]); // Datos originales de la API
  const [filteredData, setFilteredData] = useState<Coffee[]>([]); // Datos filtrados para la tabla
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData: Coffee[] = await response.json();
        setAllCoffeeData(jsonData);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El useEffect para la carga inicial de datos no tiene dependencias

  useEffect(() => {
    // Este useEffect se ejecutará cada vez que searchTerm cambie
    const filterCoffee = () => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = allCoffeeData.filter((coffee) =>
        coffee.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        coffee.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        coffee.ingredients.some((ingredient) => ingredient.toLowerCase().includes(lowerCaseSearchTerm))
      );
      setFilteredData(filtered);
    };

    filterCoffee();
  }, [searchTerm, allCoffeeData]); // 'searchTerm' y 'allCoffeeData' son las dependencias

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <p>Cargando datos de café...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos: {error}</p>;
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <h1>Lista de Cafés Calientes</h1>

      <input
        type="text"
        placeholder="Buscar por título, descripción o ingrediente"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%', maxWidth: '400px' }}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Ingredientes</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((coffee) => (
            <tr key={coffee.id}>
              <td>{coffee.id}</td>
              <td>{coffee.title}</td>
              <td>{coffee.description}</td>
              <td>{coffee.ingredients.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        input[type="text"] {
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}