import Cards from "@/components/Cards";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [pesquisa, setPesquisa] = useState("");


  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.token // seu token aqui
      }
    };

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc', options)
      .then(response => response.json())
      .then(response => setData(response.results))
      .catch(err => console.error(err));
  }, [pesquisa])

  return (

    <div className="container d-flex flex-wrap gap-3 m-auto mt-5">
      {data.map((card) => (
        <Cards id={card.id} key={card.id} titulo={card.title} legenda={card.overview} img={"https://image.tmdb.org/t/p/w500/" + card.backdrop_path} />
      ))
      }
    </div>
  )


}
