import Link from 'next/link';
import "@/styles/app.css";

export default function Home() {
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
