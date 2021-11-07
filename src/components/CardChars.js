import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";



const CardChars = ({ title, id, imagen, link }) => {
    
    return (
        <div className="card">
            <img src={imagen} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="d-flex justify-content-between">
                <Link to={link} className="btn btn-warning" >Details</Link>
                <a id={title} onClick={e => { 
									let lista = document.querySelector("ul");
									let item = document.createElement("li");
									item.className = "list-group-item fw-bold";
									item.innerHTML = String(e.target.id);
									item.addEventListener("click", function() {
										this.remove();
									});
									lista.appendChild(item);
							}} className="btn btn-warning" name={id}><AiOutlineHeart />Fav</a>
                </div>
            </div>
        </div>
    )
}

export default CardChars;