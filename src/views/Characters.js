import { useContext } from "react";
import CardChars from "../components/CardChars";
import { Context } from "../store/appContext";


const Characters = () => {
    const { store, actions } = useContext(Context);
    let favoritos = []



    return (
        <div className="container">
            <ul class="list-group mt-1">
                <li class="list-group-item active bg-warning fw-bold">Mis Favoritos</li>
            </ul>
            <div className="row">
                {store.characters.map((char) => {
                    const photo = "https://starwars-visualguide.com/assets/img/characters/" + char.uid + ".jpg";
                    const linkDir = "/characters/" + char.uid + "/detail"
                    return (
                        <div className="col-md-4 py-3" key={char.uid}>
                            <CardChars
                                id={char.uid}
                                title={char.name}
                                imagen={photo}
                                link = {linkDir}
                            />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Characters;