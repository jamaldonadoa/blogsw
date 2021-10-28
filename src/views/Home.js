import { useContext } from "react";
import { Context } from "../store/appContext";

const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <h1>Home</h1>
            <p>Bienvenido,  {store.name} {store.lastname}</p>
            <p>Bienvenido,  {actions.getFullName()}</p>
        </>
    )
}

export default Home;