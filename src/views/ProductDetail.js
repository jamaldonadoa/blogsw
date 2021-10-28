import { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const ProductDetail = (props) => {

    const { store } = useContext(Context);

    const history = useHistory();

    const { product_id } = useParams();

    /* const [images, setImages] = useState([
        { id: 1, url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" },
        { id: 2, url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" },
        { id: 3, url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" }
    ]) */

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        //console.log(product_id);
        //const selectProd = images.find((prod) => prod.id == product_id);

        const selectProd = store.products.find((prod) => prod.id === parseInt(product_id));

        setSelected(selectProd);
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-3" style={{ "max-width": "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={selected && selected.url} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Product {selected && selected.id}</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning"
                    onClick={history.goBack}>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;