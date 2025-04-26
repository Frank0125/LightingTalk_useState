import Link from 'next/link';
import "@/styles/app.css";

export default function Home() {
//* Ejemplo 1: Asignar un objeto al useState(Object)
function Form() {
  const [form, setForm] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  return (
    <main>
      <h1>Bienvenido a React Hooks</h1>
      <nav>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <Link href="/useState">
            <button>Ejemplos de useState</button>
          </Link>
          <Link href="/useEffect">
            <button>Ejemplos de useEffect</button>
          </Link>
          <Link href="/combined">
            <button>Ejemplo usando los 2 hooks a la vez</button>
          </Link>
        </div>
      </nav>
    </main>
  );
}
