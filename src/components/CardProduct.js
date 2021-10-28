import { Link } from "react-router-dom";

const CardProduct = ({ title, description, id, img }) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Link to={"/products/" + id + "/detail"} className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )
}

export default CardProduct;