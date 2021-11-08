import { useContext } from "react";
import { Context } from "../store/appContext";

const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <img className="col-md-12" src="https://i.gifer.com/X0X2.gif"/ >
            
        </>
    )
}

export default Home;