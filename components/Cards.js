import Link from "next/link";


export default function Cards({ titulo, img, legenda, id }) {
    return (
        <div className="card " style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">
                    {legenda}
                </p>
                <Link href={"filme/" + id} className="btn btn-primary">
                    Go somewhere
                </Link>
            </div>
        </div>
    )
}
