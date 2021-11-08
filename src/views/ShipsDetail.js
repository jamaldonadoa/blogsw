import {  useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";


const ShipsDetail = (props) => {

    const history = useHistory();

    const { ship_id } = useParams();

    const urldetalle = "https://www.swapi.tech/api/starships/" + ship_id

    async function traerdetalle() {
        try {
            const settings = {
                method: "GET"
            };
            const response = await fetch(urldetalle, settings);
            const resp = await response.json();
            console.log(resp)
            return resp["result"];
        } catch (error) {
            console.warn("Ha ocurrido un error: ", error);
        }
    }

    const photo = "https://starwars-visualguide.com/assets/img/starships/" + ship_id + ".jpg";

    async function crear_detalle() {
        try {
            const detalle = await traerdetalle()
            document.querySelector(".model").innerHTML = "Model: " + detalle.properties.name
            document.querySelector(".starship_class").innerHTML = "Starship Class: " + detalle.properties.height
            document.querySelector(".manufacturer").innerHTML = "Manufacturer: " + detalle.properties.hair_color
            document.querySelector(".passengers").innerHTML = "Passengers: " + detalle.properties.eye_color
            document.querySelector(".description").innerHTML = "Description: " + detalle.description

        } catch (error) {
            console.warn("Ha ocurrido un error: ", error);
        }
    }

    useEffect(() => {
        crear_detalle();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row col-md-12">
                <div className="col-md-12">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={photo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item model">
                                            <div class="spinner-grow spinner-grow-sm" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item starship_class">
                                            <div class="spinner-grow spinner-grow-sm" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item manufacturer">
                                            <div class="spinner-grow spinner-grow-sm" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item passengers">
                                            <div class="spinner-grow spinner-grow-sm" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item description">
                                            <div class="spinner-grow spinner-grow-sm" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <button className="btn btn-warning justify-content-center"
                        onClick={history.goBack}>
                        Regresar
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipsDetail;