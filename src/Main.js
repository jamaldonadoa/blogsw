import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Navbar from './components/Navbar';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';

import './Main.css';
import injectContext from './store/appContext';

const Main = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/products/:product_id/detail" component={ProductDetail} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Main);