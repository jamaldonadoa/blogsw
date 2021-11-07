import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Planets from './views/Planets';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Navbar from './components/Navbar';
import Characters from './views/Characters';
import ProductDetail from './views/CharDetail';


import './Main.css';
import injectContext from './store/appContext';

const Main = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/planets/:plan_id/detail" component={ProductDetail} />
                <Route exact path="/products/:chars_id/detail" component={ProductDetail} />
                <Route exact path="/characters" component={Characters} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/planets" component={Planets} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Main);