import { useContext } from "react";
import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import { Context } from "../store/appContext";

const Products = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                {
                    store.products.map((prod) => {
                        return (
                            <div className="col-md-4 py-3" key={prod.id}>
                                <CardProduct
                                    id={prod.id}
                                    title={prod.title}
                                    description={prod.description}
                                    img={prod.url}
                                />
                            </div>
                        )
                    })
                }
                <div className="col-md-4">
                    <CardProduct id={1} title={"Product 1"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."} img={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"} />
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={"/products/" + 2 + "/detail"} className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={"/products/" + 3 + "/detail"} className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;