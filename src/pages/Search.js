import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase(); // força minúsculo

  // Monta a URL para buscar os produtos
  const url = "http://localhost:3000/products?q=" + query;

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultado Disponível para: {query}</h1>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {items && items.length === 0 && <p>Nenhum produto encontrado.</p>}

      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
