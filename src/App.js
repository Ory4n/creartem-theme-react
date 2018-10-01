import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Notfound from './Components/Notfound/Notfound';
import Header from './Components/Header/Header';
import Students from './Pages/Students/Students';
import Services from './Pages/Services/Services';
import Portfolio from './Pages/Portfolio/Portfolio';
import Faq from './Pages/Faq/Faq';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
            <main className="page-main page-fullpage main-anim" id="mainpage">
              <div className="page-loader" id="page-loader">
        <div>
          <div className="icon ion-spin"></div>
          <p>loading</p>
        </div>
      </div>
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/students" component={Students} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/faq" component={Faq} />
          <Route component={Notfound} />
          </Switch>
        </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
