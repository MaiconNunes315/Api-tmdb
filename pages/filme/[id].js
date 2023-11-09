import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';




export default function filme() {

    const [data, setData] = useState([]);
    const router = useRouter();
    const { id } = router.query

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

    }, [])

    const filme = data.find(filme => filme.id == id);
    console.log(filme);

    return (
        <div className='d-flex gap-5'>

            <img src={"https://image.tmdb.org/t/p/w500/" + filme?.poster_path} />

            <div>
                <h1>{filme?.title}</h1>
                <h5>{filme?.overview}</h5>
            </div>
        </div>
    )
}

