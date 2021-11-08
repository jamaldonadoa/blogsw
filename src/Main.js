import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Planets from './views/Planets';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Navbar from './components/Navbar';
import Characters from './views/Characters';
import CharDetail from './views/CharDetail';
import PlanetDetail from './views/PlanetDetail';
import ShipsDetail from './views/ShipsDetail';
import Ships from './views/Ships';


import './Main.css';
import injectContext from './store/appContext';

const Main = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/ships/:ship_id/detail" component={ShipsDetail} />
                <Route exact path="/planets/:plan_id/detail" component={PlanetDetail} />
                <Route exact path="/characters/:chars_id/detail" component={CharDetail} />
                <Route exact path="/characters" component={Characters} />
                <Route exact path="/planets" component={Planets} />
                <Route exact path="/ships" component={Ships} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Main);