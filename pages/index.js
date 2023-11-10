import Cards from "@/components/Cards";
import { PesquisaContext } from "@/context/pesquisaContext";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const { pesquisa } = useContext(PesquisaContext);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.token // seu token aqui
      }
    };

    if (pesquisa.length > 3) {

      fetch(`https://api.themoviedb.org/3/search/movie?query=${pesquisa}&include_adult=false&language=pt-BR&page=${page}`, options)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));

    } else {

      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${page}&sort_by=popularity.desc`, options)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));
    }

  }, [pesquisa, page])

  return (

    <div className="container d-flex flex-wrap gap-3 m-auto mt-5">
      {data.map((card) => (
        <Cards id={card.id} key={card.id} titulo={card.title} legenda={card.overview} img={"https://image.tmdb.org/t/p/w500/" + card.backdrop_path} />
      ))
      }

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#" onClick={() => page > 0 ? setPage(page - 1) : setPage(1)}>Previous</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => setPage(1)}>1</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => setPage(2)}>2</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => setPage(3)}>3</a></li>
          <li className="page-item"><a className="page-link" href="#" onClick={() => setPage(page + 1)}>Next</a></li>
        </ul>
      </nav>
    </div>
  )


}
