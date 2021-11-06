import { Link } from "react-router-dom";

const CardChars = ({ title, id }) => {
    const photo = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
    return (
        <div className="card">
            <img src={photo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <Link to={"/products/" + id + "/detail"} className="btn btn-warning">Details</Link>
            </div>
        </div>
    )
}

export default CardChars;