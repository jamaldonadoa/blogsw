import { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


const CharDetail = (props) => {

    const history = useHistory();

    const { plan_id } = useParams();

    const urldetalle = "https://www.swapi.tech/api/planets/" + plan_id

    async function traerdetalle() {
        try {
            const settings = {
                method: "GET"
            };
            const response = await fetch(urldetalle, settings);
            const resp = await response.json();
            return resp["result"];
        } catch (error) {
            console.warn("Ha ocurrido un error: ", error);
        }
    }

    const photo = "https://starwars-visualguide.com/assets/img/planets/" + plan_id + ".jpg";

    async function crear_detalle() {
        try {
            const detalle = await traerdetalle()
            document.querySelector(".diameter").innerHTML = "Diameter: " + detalle.properties.name
            document.querySelector(".rotation_period").innerHTML = "Rotation_period: " + detalle.properties.height
            document.querySelector(".orbital_period").innerHTML = "Orbital_period: " + detalle.properties.hair_color
            document.querySelector(".gravity").innerHTML = "Gravity: " + detalle.properties.eye_color
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
                                        <li class="list-group-item diameter">
                                            <div class="spinner-grow spinner-grow-sm" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item rotation_period">
                                            <div class="spinner-grow spinner-grow-sm" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item orbital_period">
                                            <div class="spinner-grow spinner-grow-sm" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item gravity">
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

export default CharDetail;