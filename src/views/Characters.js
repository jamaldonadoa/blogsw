import { useContext } from "react";
import { Link } from "react-router-dom";
import CardChars from "../components/CardChars";
import { Context } from "../store/appContext";

const Characters = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                {
                    store.characters.map((char) => {
                        return (
                            <div className="col-md-4 py-3" key={char.uid}>
                                <CardChars
                                    id={char.uid}
                                    title={char.name}
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